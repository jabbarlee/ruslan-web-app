"use client";

import { useRef } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/ruslans-presentation-video.mp4";
    link.download = "ruslans-presentation-video.mp4";
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
                Presentation Video
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
              Download Video
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-teal-100 overflow-hidden">
            <div className="w-full bg-slate-900 flex items-center justify-center">
              <video
                ref={videoRef}
                controls
                className="w-full h-auto max-h-[80vh]"
                preload="metadata"
              >
                <source src="/ruslans-presentation-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

