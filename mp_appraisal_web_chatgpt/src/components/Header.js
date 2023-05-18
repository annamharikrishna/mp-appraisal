import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  // Hide the header on the login page
  //   if (history.location.pathname === '/login') {
  //     return null;
  //   }
  const logOut = () => {
    // localStorage.removeItem('token');
    localStorage.clear();
    history.push("/login");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="logo">My Appraisal</div>
      <nav>
        {localStorage.getItem("isAuthenticated") === "true" ? (
          <ul className="nav-links">
            {localStorage.getItem("role") !== "employee" ? (
              <li>
                <a href="/dashboard">Dashboard</a>
              </li>
            ) : (
              []
            )}

            <li>
              <a href="/appraisal">Appraisal</a>
            </li>

            <li>
              <button className="logout-btn" onClick={logOut}>
                Log out
              </button>
            </li>
          </ul>
        ) : (
          []
        )}
      </nav>
    </header>
  );
};

export default Header;
