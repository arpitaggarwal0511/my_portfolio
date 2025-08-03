import img from "../utils/gradcat.png";

const About = () => {
    
    return (
        <div className="aboutbody">
          <div className="aboutdesc">
            <p><h3>Hi! I'm Arpit.</h3></p>
            <p>
            I'm a passionate Front-End Developer and Computer Science undergrad with full-stack development experience. I specialize in building modern web applications using React.js, Next.js, Tailwind CSS, and integrating powerful APIs.
            </p>
            <p>
            Beyond the frontend, I also work with backend technologies like Python (FastAPI) and Node.js, enabling me to develop and deploy complete end-to-end solutions.
            </p>
            <>
            From AI-powered resume tools to real-time chat platforms and dynamic web apps, I love turning ideas into intuitive, high-performance digital products. My goal is always to blend creativity with clean, scalable code to craft seamless user experiences.


            </>
             
          </div>
          <div className="aboutimg">
            <img className="aboutimage" src={img}/>
          </div>
        </div>
      );
};
export default About;