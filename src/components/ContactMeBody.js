import linkedicon from "../utils/liknedin.png"
import githubicon from "../utils/githubicon.png"
import resumeimg from "../utils/resume.jpg"
const ResumeContact = () => {
  return (
    <div className="contactmebody">
      <h1>Let's Connect!</h1>
      <h3>You can reach me at:</h3>
      <div
        className="emaillink"
        onClick={() =>
          (window.location.href = "mailto:arpitaggarwal0511@gmail.com")
        }
      >
        arpitaggarwal0511@gmail.com
      </div>
      <div className="conticons">
      <img onClick={()=> window.open('https://www.linkedin.com/in/arpit-aggarwal-5b6040257/')} src={linkedicon}></img>
      <img onClick={()=> window.open('https://github.com/arpitaggarwal0511N')} src={githubicon}></img>
      </div>
      <img onClick={()=>window.open('https://drive.google.com/file/d/1jnB4bsiscMeC0XoIkIp_HXGHCpc6BsI8/view')} className="resumeimage" src={resumeimg}></img>
        
    </div>
  );
};
export default ResumeContact;
