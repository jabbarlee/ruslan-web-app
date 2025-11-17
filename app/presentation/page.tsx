export default function Presentation() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Presentation
            </h1>
            <div className="h-1 w-24 bg-teal-600 rounded-full"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-600 leading-relaxed">
              This page will contain my presentations, slides, and conference materials.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

