import React, { useState } from 'react';

const EditForm = ({ appraisal, onClose }) => {
  const [editedAppraisal, setEditedAppraisal] = useState(appraisal);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedAppraisal((prevAppraisal) => ({
      ...prevAppraisal,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Make an API call to update the edited appraisal
    // Replace 'https://api.example.com/appraisals' with your actual API endpoint
    fetch(`https://api.example.com/appraisals/${editedAppraisal.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedAppraisal),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Appraisal updated:', data);
        onClose();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h3>Edit Appraisal</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={editedAppraisal.userId}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Overall Rating:</label>
          <input
            type="number"
            name="overallRating"
            value={editedAppraisal.overallRating}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditForm;
