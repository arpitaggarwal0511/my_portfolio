import img from "../utils/imgurl.jpeg";
const HomeBody = () => {
  return (
    <div className="homebody">
      <div className="homedesc">
        <p>Hi! I'm Arpit.</p>
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
      <div className="homeimg">
        <img className="homeimage" src={img}/>
      </div>
    </div>
  );
};
export default HomeBody;
