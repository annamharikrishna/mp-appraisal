import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Popup from "./Popup";
import EditForm from "./EditForm";
import { APPRAISAL_BASE_URL } from "../config/config.environment";

const Dashboard = () => {
  const [appraisals, setAppraisals] = useState([]);
  const [selectedAppraisal, setSelectedAppraisal] = useState(null);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    // Fetch appraisals from the API and update the state
    fetchAppraisals();
  }, []);

  const fetchAppraisals = () => {
    // Make an API call to retrieve the appraisals list
    // Replace 'https://api.example.com/appraisals' with your actual API endpoint

    const apiUrl = APPRAISAL_BASE_URL + "api/appraisalentry/get_employee_appraisal_form";
    const params = {
      user_id: localStorage.getItem("userId"),
    };

    // Convert the params object into a query string
    const queryString = Object.keys(params)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`
      )
      .join("&");

    // Append the query string to the URL
    const url = `${apiUrl}?${queryString}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log({data})
        setAppraisals(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const openPopup = (appraisal) => {
    setSelectedAppraisal(appraisal);
    // setEditingMode(true);
  };

  const closePopup = () => {
    setSelectedAppraisal(null);
  };

  const history = useHistory();

  const editAppraisal = (data) => {
    setEditingMode(true);
    history.push({
      pathname: "/appraisal",
      state: data,
    });
    console.log(data)
    closePopup();
  };

  const closeEditForm = () => {
    setEditingMode(false);
  };

  return (
    <div className="container mt-4">
      <h2>Dashboard</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        {appraisals.map((appraisal) => (
          <div className="col" key={appraisal.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">User ID: {appraisal.employee_id}</h5>
                <p className="card-text">Rating: {appraisal.rating}</p>
                <button className="btn btn-primary me-2" onClick={() => editAppraisal(appraisal)}>Edit</button>
                <button className="btn btn-secondary" onClick={() => openPopup(appraisal)}>View</button>
              </div>
            </div>
          </div>
          
        ))}
        {selectedAppraisal && (
          <Popup onClose={closePopup}>
            <h3>Appraisal Details</h3>
            <p>User ID: {selectedAppraisal.userId}</p>
            <p>Overall Rating: {selectedAppraisal.overallRating}</p>
          </Popup>
        )}
        {editingMode && (
          <EditForm appraisal={selectedAppraisal} onClose={closeEditForm} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
