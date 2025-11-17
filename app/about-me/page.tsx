import Image from "next/image";

export default function AboutMe() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              About Me
            </h1>
            <div className="h-1 w-24 bg-teal-600 rounded-full"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <div className="flex-shrink-0 w-full sm:w-auto">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto sm:mx-0">
                <Image
                  src="/ruslan_photo.jpg"
                  alt="Ruslan Nabi"
                  fill
                  className="rounded-2xl object-cover border-4 border-teal-200 shadow-lg"
                  priority
                />
              </div>
            </div>

            <div className="prose prose-lg max-w-none flex-1">
              <div className="space-y-6 text-slate-700">
                <p className="text-lg leading-relaxed">
                  My name is{" "}
                  <span className="font-semibold text-teal-700">
                    Ruslan Nabi
                  </span>
                  , and I'm originally from Azerbaijan. I'm studying Computer
                  Science at North American University in Houston.
                </p>

                <p className="text-lg leading-relaxed">
                  Along with Philosophy, I'm taking Data Structures, Computer
                  Organization, History, and Geography, which help me build both
                  technical and analytical skills.
                </p>

                <p className="text-lg leading-relaxed">
                  I'm currently in a challenging stage of life, learning to
                  handle real adult responsibilities, solve big problems on my
                  own, and adapt to living in a new country. These experiences
                  are shaping me into a more independent and focused person.
                </p>

                <p className="text-lg leading-relaxed">
                  When I got free time, I enjoy dealing with technology,
                  learning about cars, and updating my photography skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
