// create a login page for an employee with fields for username and password and it should redirect to the appraisal page if the credentials are correct without using useHistory() hook.

// Solution:
// create Login.js file in src/components folder and add the following code:
// // create login page for an employee with fields for username and password and it should redirect to the appraisal page if the credentials are correct without using useHistory() hook.
// import React from 'react'
// import { useState } from 'react'

import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { authenticate, isAuthenticated } from "./Authentication";
import { APPRAISAL_BASE_URL } from "../config/config.environment";
import { authenticate } from "./Authentication";
const Login = () => {
  const [employee_id, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // write login functionality here using axios or fetch using post method and authenticate the user using authenticate() function and redirect to appraisal page if the credentials are correct without using useHistory() hook.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetails = { employee_id, password };
    const url = APPRAISAL_BASE_URL + "api/appraisalentry/employee_login";
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data,[data[0].employee_id]);
    localStorage.setItem("userRole", data[0].role);
    localStorage.setItem("employee_id", data[0].employee_id);
    if (response.status === 200) {
      authenticate()
      history.push("/appraisal");
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={employee_id}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
