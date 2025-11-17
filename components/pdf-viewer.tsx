"use client";

import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

export default function PDFViewer() {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Set up PDF.js worker for Next.js and ensure CSS variables are set
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Use local worker file from public folder
      pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.mjs`;

      // Ensure CSS variables are set (they're in globals.css, but ensure they're available)
      const root = document.documentElement;
      if (!root.style.getPropertyValue("--react-pdf-text-layer")) {
        root.style.setProperty("--react-pdf-text-layer", "1");
      }
      if (!root.style.getPropertyValue("--react-pdf-annotation-layer")) {
        root.style.setProperty("--react-pdf-annotation-layer", "1");
      }

      console.log("PDF.js worker configured");
    }
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    console.log("PDF loaded successfully, pages:", numPages);
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error("Error loading PDF:", error);
    setError(`Failed to load PDF: ${error.message || "Unknown error"}`);
    setLoading(false);
  }

  const goToPreviousPage = () => {
    setPageNumber((prev) => Math.max(1, prev - 1));
  };

  const goToNextPage = () => {
    setPageNumber((prev) => Math.min(numPages, prev + 1));
  };

  const goToPage = (page: number) => {
    setPageNumber(Math.max(1, Math.min(numPages, page)));
  };

  return (
    <>
      {/* Ensure TextLayer and AnnotationLayer styles are available */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --react-pdf-text-layer: 1;
            --react-pdf-annotation-layer: 1;
          }
        `,
        }}
      />
      <div className="bg-white rounded-lg shadow-sm border border-teal-100 p-4 sm:p-8">
        {/* Navigation Controls */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-teal-100">
          <div className="flex items-center gap-4">
            <button
              onClick={goToPreviousPage}
              disabled={pageNumber <= 1}
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>
            <span className="text-sm text-slate-600">
              Page {pageNumber} of {numPages || "..."}
            </span>
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= numPages}
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={1}
              max={numPages}
              value={pageNumber}
              onChange={(e) => goToPage(parseInt(e.target.value) || 1)}
              className="w-20 rounded-md border border-teal-300 px-3 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              placeholder="Page"
            />
            <span className="text-sm text-slate-600">Go to page</span>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="flex justify-center items-start bg-slate-50 rounded-lg p-4 sm:p-8 min-h-[600px] overflow-x-auto">
          {error && (
            <div className="text-center py-12 w-full">
              <p className="text-red-600 mb-4">{error}</p>
              <button
                onClick={() => {
                  setError(null);
                  setLoading(true);
                  setPageNumber(1);
                  setNumPages(0);
                }}
                className="rounded-lg bg-teal-600 px-4 py-2 text-white hover:bg-teal-700"
              >
                Retry
              </button>
            </div>
          )}
          {!error && (
            <Document
              file="/research-presentation-new.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex flex-col items-center justify-center gap-4 py-12">
                  <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-600">Loading presentation...</p>
                </div>
              }
              error={
                <div className="text-center py-12">
                  <p className="text-red-600">
                    Failed to load the presentation. Please try again later.
                  </p>
                </div>
              }
              className="flex flex-col items-center w-full"
            >
              {numPages > 0 && (
                <div className="w-full flex justify-center">
                  <Page
                    pageNumber={pageNumber}
                    renderTextLayer={true}
                    renderAnnotationLayer={true}
                    className="shadow-lg"
                    width={Math.min(
                      900,
                      typeof window !== "undefined"
                        ? window.innerWidth - 80
                        : 900
                    )}
                    scale={1.0}
                    loading={
                      <div className="flex flex-col items-center justify-center gap-4 py-12">
                        <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-slate-600">Loading page...</p>
                      </div>
                    }
                  />
                </div>
              )}
            </Document>
          )}
        </div>

        {/* Page Navigation Dots */}
        {numPages > 1 && (
          <div className="mt-6 pt-4 border-t border-teal-100">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {Array.from({ length: numPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                    pageNumber === page
                      ? "bg-teal-600 text-white"
                      : "bg-teal-100 text-teal-700 hover:bg-teal-200"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
