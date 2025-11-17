"use client";

import { useEffect, useRef, useState } from "react";
import { renderAsync } from "docx-preview";

export default function ResearchPaper() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDocument = async () => {
      if (!containerRef.current) return;

      try {
        const response = await fetch("/research-paper.docx");
        const arrayBuffer = await response.arrayBuffer();

        // Clear container
        containerRef.current.innerHTML = "";

        // Render the document
        await renderAsync(arrayBuffer, containerRef.current, undefined, {
          className: "docx-wrapper",
          inWrapper: true,
          ignoreWidth: false,
          ignoreHeight: false,
          ignoreFonts: false,
          breakPages: true,
          ignoreLastRenderedPageBreak: true,
          experimental: false,
          trimXmlDeclaration: true,
          useBase64URL: false,
        });

        setLoading(false);
      } catch (err) {
        setError("Failed to load the document. Please try again later.");
        setLoading(false);
        console.error("Error loading document:", err);
      }
    };

    console.log("Document loaded successfully");

    loadDocument();
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/research-paper.docx";
    link.download = "research-paper.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Research Paper
              </h1>
              <div className="h-1 w-24 bg-teal-600 rounded-full"></div>
            </div>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 px-5 py-3 text-base font-medium text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 shadow-sm w-full sm:w-auto"
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
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-teal-100 overflow-hidden">
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-slate-600">Loading document...</p>
                </div>
              </div>
            )}

            {error && (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <div
              ref={containerRef}
              className="docx-container p-8 sm:p-12 min-h-[600px] overflow-auto"
              style={{
                backgroundColor: "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
