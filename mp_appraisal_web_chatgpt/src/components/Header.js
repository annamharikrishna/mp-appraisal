import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
    const history = useHistory();

  // Hide the header on the login page
  console.log(history)
//   if (history.location.pathname === '/login') {
//     return null;
//   }
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/">Dashboard</a>
          </li>
          <li>
            <a href="/appraisal">Appraisal</a>
          </li>
          <li>
            <button className="logout-btn">Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
