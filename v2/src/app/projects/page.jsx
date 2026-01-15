export const metadata = {
  title: "Projects",
  description:
    "Selected projects by Arpit Aggarwal showcasing full-stack development, frontend engineering, and real-world problem solving.",
  keywords: [
    "Arpit Aggarwal Projects",
    "Software Developer Portfolio",
    "Full Stack Projects",
    "React Next.js Projects",
  ],
  openGraph: {
    title: "Projects | Arpit Aggarwal",
    description:
      "A curated selection of projects built by Arpit Aggarwal with links to GitHub repositories.",
    url: "https://arpitaggarwal.netlify.app/projects",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProjectsPage() {
  const projects = [
    {
      name: "Anonymous Web Chat App",
      description:
        "A real-time anonymous chat application built with TypeScript and WebSockets.",
      github: "https://github.com/arpitaggarwal0511/anonchat",
      live: "https://anonchat-mocha.vercel.app/",
      image: "/images/chat.png",
    },
    {
      name: "AI Based Resume Parser and Scorer",
      description:
        "An ATS resume parser built in Python with scoring and actionable feedback.",
      github: "https://github.com/arpitaggarwal0511/resumeATS",
      live: "https://resume-ats-zeta.vercel.app/",
      image: "/images/resumeATS.png",
    },
    {
      name: "Random Cat Fact Generator",
      description:
        "A fun web app that generates random cat facts with a clean UI.",
      github: "https://github.com/arpitaggarwal0511/Food-Delivery-app",
      live: "https://randomkittyfacts.netlify.app/",
      image: "/images/catfact.png",
    },
    {
      name: "Food Delivery App",
      description:
        "A React-based food delivery frontend with menus, cart, and user flows.",
      github: "https://github.com/arpitaggarwal0511/Food-Delivery-app",
      live: null, // no live demo
      image: "/images/foodcat.png",
    },
    {
      name: "More Coming Soon ... ",
      description: "",
      github: "https://github.com/arpitaggarwal0511",
      live: null,
      image: "/images/loading.png",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 md:px-12 py-24">
      <h1 className="text-3xl font-light text-center mb-12">
        Selected Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((proj) => {
          const ImageWrapper = proj.live ? "a" : "div";

          return (
            <div
              key={proj.name}
              className="bg-[#2f2f2f] rounded-xl p-6 shadow-lg hover:scale-[1.03] transition"
            >
              <ImageWrapper
                {...(proj.live
                  ? {
                      href: proj.live,
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  : {})}
                className={`block w-full h-48 flex items-center justify-center 
                  bg-[#1f1f1f] rounded-md mb-6 overflow-hidden
                  ${proj.live ? "cursor-pointer group" : ""}`}
              >
                <img
                  src={proj.image}
                  alt={`${proj.name} screenshot`}
                  className={`max-h-full max-w-full object-contain transition-transform duration-300
                    ${proj.live ? "group-hover:scale-110" : ""}`}
                />
              </ImageWrapper>

              <h2 className="text-xl font-medium mb-2">
                {proj.name}
              </h2>

              {proj.description && (
                <p className="text-sm opacity-80 mb-4 leading-relaxed">
                  {proj.description}
                </p>
              )}

              <div className="flex gap-4 text-sm">
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    GitHub
                  </a>
                )}

                {proj.live && (
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:opacity-80"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
