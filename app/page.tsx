export default function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
            Explore my research, presentations, and academic work through the navigation above.
          </p>
          <div className="pt-8 flex flex-wrap justify-center gap-4">
            <a
              href="/about-me"
              className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              About Me
            </a>
            <a
              href="/research-paper"
              className="inline-flex items-center justify-center rounded-lg border border-teal-600 px-6 py-3 text-base font-medium text-teal-700 transition-colors hover:bg-teal-50"
            >
              Research Paper
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
