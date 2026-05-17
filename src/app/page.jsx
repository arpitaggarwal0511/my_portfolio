export default function Home() {
  const featuredProjects = [
    {
      name: "Anonymous Web Chat App",
      description:
        "A real-time anonymous chat application built with WebSockets and TypeScript.",
      image: "/images/chat.png",
      live: "https://anonchat-mocha.vercel.app/",
      github: "https://github.com/arpitaggarwal0511/anonchat",
    },
    {
      name: "AI Based Resume Parser and Scorer",
      description:
        "An ATS resume parser built in Python that analyzes resumes and provides structured scoring and feedback.",
      image: "/images/resumeATS.png",
      live: "https://resume-ats-zeta.vercel.app/",
      github: "https://github.com/arpitaggarwal0511/resumeATS",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 md:px-12">
      {/* HERO / INTRO */}
      <section className="py-20 md:py-24">
        <div className="max-w-xl space-y-4">
          <p className="text-xl leading-relaxed">
            I’m a software developer focused on building clean, scalable, and
            user-centric web applications.
          </p>
          <p className="text-sm opacity-80">
            Strong interest in frontend architecture, backend systems, and
            applied machine learning.
          </p>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-3xl font-light text-center mb-3">
          Selected Work
        </h2>
        <p className="opacity-70 text-center mb-12">
          Projects I’ve built recently
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <div
              key={project.name}
              className="bg-[#2f2f2f] rounded-xl p-6"
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-44 flex items-center justify-center 
                           bg-[#1f1f1f] rounded-md mb-5 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="max-h-full max-w-full object-contain 
                             transition-transform duration-300 hover:scale-105"
                />
              </a>

              <h3 className="text-lg font-medium mb-2">
                {project.name}
              </h3>

              <p className="text-sm opacity-80 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex gap-4 text-sm">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:opacity-80"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="text-2xl font-light mb-4">Get in Touch</h2>

        <a
          href="mailto:arpitaggarwal0511@gmail.com"
          className="text-lg underline underline-offset-8 hover:opacity-80"
        >
          arpitaggarwal0511@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/arpitaggarwal0511"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/githubicon.png"
              alt="GitHub"
              width={36}
              height={36}
              className="opacity-80 hover:opacity-100 transition"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/arpit-aggarwal-5b6040257/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              width={36}
              height={36}
              className="opacity-80 hover:opacity-100 transition"
            />
          </a>
        </div>
      </section>
    </main>
  );
}