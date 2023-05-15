// creation of basic header component which contains the logout button, and the header component is used in the appraisal and dashboard pages
//
// Solution:
// create header.js file in src/components folder and add the following code:
// // // create basic header component which contains the logout button, and the header component is used in the appraisal and dashboard pages
import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { logout } from "./Authentication";
import medLogo from "../medLogo.svg";

const Header = () => {
  const history = useHistory();
  const [userRole, setUserRole] = useState(localStorage.getItem("userRole"));
  useEffect(()=>{

  }, [])
  const handleLogout = () => {
    logout();
    history.push("/login");
    localStorage.clear();
  };

  return (
    <header className="header header-component">
      {/* add Appraisal logo to the header */}
      <div className="logo">
        <img
          src={medLogo}
          alt="Appraisal Logo"
          onClick={() => history.push("/dashboard")}
          className="appraisal-logo"
        />
      </div>
      <nav className="header-component" style={{ width: "60%" }}>
        <ul className="nav-list">
           <li>
            <Link to="/dashboard" className="nav-link">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/appraisal" className="nav-link">
              Appraisal
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          {/* <li> to user detais page */}
            <li>
              <Link to="/userdetails" className="nav-link">
                Profile
              </Link>
            </li>
        </ul>
        {/* add a search bar */ }
        <div className="search-bar">
          <input type="text" placeholder="Search" />
        </div>
        
        <button className="logout-btn" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>
      </nav>
    </header>
  );
};

export default Header;
