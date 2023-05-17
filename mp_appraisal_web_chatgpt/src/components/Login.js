import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { APPRAISAL_BASE_URL } from "../config/config.environment";

const LoginPage = () => {
  const [employee_id, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async (e) => {
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
    localStorage.setItem("userId", data[0].employee_id);
    if (response.status === 200) {
      localStorage.setItem("isAuthenticated", true);
      history.push("/dashboard");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="login-input"
            value={employee_id}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
