const About = () => {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="mx-auto max-w-6xl
                      flex flex-col md:flex-row
                      items-center justify-between
                      gap-12 md:gap-16">

        <div className="max-w-xl space-y-4 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-semibold">
            Hi! I&apos;m Arpit.
          </h3>

          <p className="text-sm md:text-base leading-relaxed opacity-85">
            I'm a passionate Front-End Developer and Computer Science undergrad
            with full-stack development experience. I specialize in building
            modern web applications using React.js, Next.js, Tailwind CSS, and
            integrating powerful APIs.
          </p>

          <p className="text-sm md:text-base leading-relaxed opacity-85">
            Beyond the frontend, I also work with backend technologies like
            Python (FastAPI) and Node.js, enabling me to develop and deploy
            complete end-to-end solutions.
          </p>

          <p className="text-sm md:text-base leading-relaxed opacity-85">
            From AI-powered resume tools to real-time chat platforms and dynamic
            web apps, I love turning ideas into intuitive, high-performance
            digital products. My goal is always to blend creativity with clean,
            scalable code to craft seamless user experiences.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/gradcat.png"
            alt="Graduation Cat"
            className="w-56 md:w-[300px] h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
