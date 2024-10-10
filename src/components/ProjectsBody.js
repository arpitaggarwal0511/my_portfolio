import devimg from "../utils/pccat.png"
import food from "../utils/foodcat.png"
import catfact from "../utils/catfact.png"
import load from "../utils/loading.png"
import Link from "react-router-dom";
const Projects = () => {
    
    return (
        <div className="projectsbody">
            <img className="devimage" src ={devimg}/>
            <h2 className="projhead">
            fetch.pull.merge.push        
            </h2>
            <p>I'm a Front-End Developer skilled at creating responsive, user-friendly interfaces, enhancing user experience, and ensuring seamless performance.    </p>
            <h3>Check out some of my work below.
            </h3>
            <div className="cardsholder">
            <div className="project-cards">

                <div className="card" 
                 onClick={() => window.open('https://github.com/arpitaggarwal0511/Food-Delivery-app')}>
                <img className="card-icons" src={food}/>                
                    <p>Food Delivery Web Application</p>
                </div>


                <div className="card"
                onClick={() => window.open('https://randomkittyfacts.netlify.app/')}>
                <img className="card-icons" src={catfact}/>                
                    <p>Random Cat Fact Generator</p>
                </div>
                <div className="card">
                <img className="card-icons" src={load}/>                
                    <p>More Coming Soon !!</p>
                </div>
                
            </div>
            </div>
</div>
    );
};
export default Projects;