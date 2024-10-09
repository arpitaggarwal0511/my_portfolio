import img from "../utils/gradcat.png";

const About = () => {
    
    return (
        <div className="aboutbody">
          <div className="aboutdesc">
            <p><h3>Hi! I'm Arpit.</h3></p>
            <p>
            I am a Front-End developer with expertise web development. I have a strong foundation in
            coding, database management, server administration, and user interface
            design. My skills enable me to create and maintain comprehensive web
            applications.
            </p>
            <p>
            In every project, I aim to blend creativity and technical
            excellence to build awesome online experiences.
            </p>
             
          </div>
          <div className="aboutimg">
            <img className="aboutimage" src={img}/>
          </div>
        </div>
      );
};
export default About;