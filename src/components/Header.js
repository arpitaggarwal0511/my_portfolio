import { NavLink } from "react-router-dom";
import {useState} from "react";
const Header = () => {
  const [dropdown, setdropdown] = useState("");

  return (
    <div className="header">
      <div className="title-heading">
        <NavLink to="/" className="title-link">
          <h1 className="title">Arpit Aggarwal</h1>
        </NavLink>
      </div>
      <div className="navig">
        <ul>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resumecontact"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Resume + Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
            >
              Projects
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
