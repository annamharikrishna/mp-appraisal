import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Header = () => {
  const history = useHistory();

  // Hide the header on the login page
  console.log(history)
  //   if (history.location.pathname === '/login') {
  //     return null;
  //   }
  const logOut = () => {
    // localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <header className="header">
      <div className="logo">My Appraisal</div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/appraisal">Appraisal</a>
          </li>
          <li>
            <button className="logout-btn" onClick={logOut}>Log out</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
