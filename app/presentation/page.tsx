"use client";

import dynamic from "next/dynamic";

// Dynamically import PDF viewer with SSR disabled to avoid DOMMatrix error
const PDFViewer = dynamic(() => import("@/components/pdf-viewer"), {
  ssr: false,
  loading: () => (
    <div className="bg-white rounded-lg shadow-sm border border-teal-100 p-4 sm:p-8">
      <div className="flex items-center justify-center py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600">Loading PDF viewer...</p>
        </div>
      </div>
    </div>
  ),
});

export default function Presentation() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
                Presentation
              </h1>
              <div className="h-1 w-24 bg-teal-600 rounded-full"></div>
            </div>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/research-presentation-new.pdf";
                link.download = "research-presentation-new.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
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
              Download PDF
            </button>
          </div>

          <PDFViewer />
        </div>
      </div>
    </div>
  );
}
