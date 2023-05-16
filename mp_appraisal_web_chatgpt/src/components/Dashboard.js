import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import EditForm from './EditForm';

const Dashboard = () => {
  const [appraisals, setAppraisals] = useState([]);
  const [selectedAppraisal, setSelectedAppraisal] = useState(null);
  const [editingMode, setEditingMode] = useState(false);

  useEffect(() => {
    // Fetch appraisals from the API and update the state
    // fetchAppraisals();
  }, []);

  const fetchAppraisals = () => {
    // Make an API call to retrieve the appraisals list
    // Replace 'https://api.example.com/appraisals' with your actual API endpoint
    fetch('https://api.example.com/appraisals')
      .then((response) => response.json())
      .then((data) => {
        setAppraisals(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openPopup = (appraisal) => {
    setSelectedAppraisal(appraisal);
  };

  const closePopup = () => {
    setSelectedAppraisal(null);
  };

  const editAppraisal = () => {
    setEditingMode(true);
    closePopup();
  };

  const closeEditForm = () => {
    setEditingMode(false);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {appraisals.map((appraisal) => (
        <div className="card" key={appraisal.id}>
          <p>User ID: {appraisal.userId}</p>
          <p>Overall Rating: {appraisal.overallRating}</p>
          <div className="btn-container">
            <button onClick={() => openPopup(appraisal)}>View</button>
            <button onClick={() => editAppraisal()}>Edit</button>
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
  );
};

export default Dashboard;
