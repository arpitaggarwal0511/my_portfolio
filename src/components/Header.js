import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="title-heading">
        <Link to="/home">
        <h1 className="title">Arpit Aggarwal</h1>
        </Link>
      </div>
      <div className="navig">
        <ul>
          <li>
            <Link to="/contact">
              <h3>Contact Me</h3>
            </Link>
          </li>
          <li>
            <Link to="/resume">
              <h3>Resume</h3>
            </Link>
          </li>
          <li>
            <Link to="/projects">
              <h3>Projects</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
