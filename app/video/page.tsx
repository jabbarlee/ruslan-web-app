export default function Video() {
  const youtubeVideoId = "-rVWFxbFQe8";
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

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
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Watch on YouTube
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-teal-100 overflow-hidden">
            <div className="w-full bg-slate-900 flex items-center justify-center p-0">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Presentation Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

