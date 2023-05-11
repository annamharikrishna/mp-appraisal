// creation of basic header component which contains the logout button, and the header component is used in the appraisal and dashboard pages
//
// Solution:
// create header.js file in src/components folder and add the following code:
// // // create basic header component which contains the logout button, and the header component is used in the appraisal and dashboard pages
import React from "react";
import { useHistory, Link } from "react-router-dom";
import { logout } from "./Authentication";

const Header = () => {
  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push("/login");
  };

  return (
    <header className="header header-component">
      {/* add Appraisal logo to the header */}
      <div className="logo">
        <img
          src="https://www.appraisal360.co.uk/wp-content/uploads/2019/03/appraisal360-logo.png"
          alt="Appraisal Logo"
          onClick={() => history.push("/dashboard")}
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
        </ul>
        <button className="logout-btn" onClick={handleLogout}>
          {" "}
          Logout{" "}
        </button>
      </nav>
    </header>
  );
};

export default Header;
