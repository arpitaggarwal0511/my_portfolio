const About = () => {

  return (
  <div className="flex flex-col md:flex-row items-center justify-center gap-12 py-24">
    <div className="max-w-md space-y-4 text-center md:text-left">
      <h3 className="text-xl font-semibold">Hi! I&apos;m Arpit.</h3>

      <p className="text-sm leading-relaxed opacity-85">
        I'm a passionate Front-End Developer and Computer Science undergrad with
        full-stack development experience. I specialize in building modern web
        applications using React.js, Next.js, Tailwind CSS, and integrating
        powerful APIs.
      </p>

      <p className="text-sm leading-relaxed opacity-85">
        Beyond the frontend, I also work with backend technologies like Python
        (FastAPI) and Node.js, enabling me to develop and deploy complete
        end-to-end solutions.
      </p>

      <p className="text-sm leading-relaxed opacity-85">
        From AI-powered resume tools to real-time chat platforms and dynamic web
        apps, I love turning ideas into intuitive, high-performance digital
        products. My goal is always to blend creativity with clean, scalable
        code to craft seamless user experiences.
      </p>
    </div>

    <div className="flex items-center justify-center">
      <img
        src="/images/gradcat.png"
        alt="Graduation Cat"
        width={300}
        height={300}
      />
    </div>
  </div>
);

};
export default About;