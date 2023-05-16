// generate a registration for for employee with fields for first name, last name, email, employee_id, mobile_number, role, password, confirm password and it should redirect to the login page if the registration is successful.
//
// Solution:
// create Registration.js file in src/components folder and add the following code:
// // // create a registration for for employee with fields for first name, last name, email, employee_id, mobile_number, role, password, confirm password and it should redirect to the login page if the registration is successful.
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
// import { register } from "./service";

const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [employeeId, setEmployeeId] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [role, setRole] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const history = useHistory();
    const [response, error, loading, axiosFetch, setError] = useAxios()


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            employee_id: employeeId,
            mobile_number: mobileNumber,
            role: role,
            password: password,
            confirm_password: confirmPassword,
        };
        // register(data);
        history.push("/login");
    };

    return (
        <div className="registration-page">
            <div className="registration-form">
                <h1>Registration</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name: </label>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email: </label>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Employee Id: </label>
                        <input
                            type="text"
                            name="employeeId"
                            value={employeeId}
                            onChange={(e) => setEmployeeId(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Mobile Number: </label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Role: </label>
                        <input
                            type="text"
                            name="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
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
                    <div>
                        <label>Confirm Password: </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;

