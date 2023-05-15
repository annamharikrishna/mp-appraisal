// create a user detils page that is used to updtate the employee details and show the employee details in a card.
//
// Solution:
// create UserDetails.js file in src/components folder and add the following code:
// // // create a user detils page that is used to updtate the employee details and show the employee details in a card.
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { getUserDetails, updateUserDetails } from "./service";

const UserDetails = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
            employee_id: employeeId,
            mobile_number: mobileNumber,
            role: role,
            password: password,
            confirm_password: confirmPassword,
        };
        axiosFetch(updateUserDetails(data))
        history.push("/dashboard");
    }
    useEffect(() => {
        axiosFetch(getUserDetails())
    }
    , [])
    useEffect(() => {
        if(response?.data){
            setFirstName(response.data.first_name)
            setLastName(response.data.last_name)
            setEmployeeId(response.data.employee_id)
            setMobileNumber(response.data.mobile_number)
            setRole(response.data.role)
        }
    }
    , [response])
    return (
        <div className="registration-page">
            <div className="registration-form">
                <h1>User Details</h1>
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
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default UserDetails;
