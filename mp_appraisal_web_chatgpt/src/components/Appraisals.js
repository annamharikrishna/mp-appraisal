import React, { useState } from 'react';

const AppraisalForm = () => {
  const [productKnowledge, setProductKnowledge] = useState('');
  const [systemKnowledge, setSystemKnowledge] = useState('');
  const [salesPromotionSkills, setSalesPromotionSkills] = useState('');
  const [privateLabelPromotionSkills, setPrivateLabelPromotionSkills] = useState('');
  const [customerInteractionSkills, setCustomerInteractionSkills] = useState('');
  const [overallRating, setOverallRating] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      productKnowledge,
      systemKnowledge,
      salesPromotionSkills,
      privateLabelPromotionSkills,
      customerInteractionSkills,
      overallRating,
    };
    console.log({ formData })
  
    fetch('https://example.com/get_employee_appraisal_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the API response as needed
        console.log(data);
      })
      .catch((error) => {
        // Handle any error that occurred during the API call
        console.error(error);
      });
  };
  

  return (
    <div>
      <h2>Employee Appraisal Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Product Knowledge:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={productKnowledge}
            onChange={(e) => setProductKnowledge(e.target.value)}
          />
        </div>
        <div>
          <label>System Knowledge:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={systemKnowledge}
            onChange={(e) => setSystemKnowledge(e.target.value)}
          />
        </div>
        <div>
          <label>Sales Promotion Skills:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={salesPromotionSkills}
            onChange={(e) => setSalesPromotionSkills(e.target.value)}
          />
        </div>
        <div>
          <label>Private Label Promotion Skills:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={privateLabelPromotionSkills}
            onChange={(e) => setPrivateLabelPromotionSkills(e.target.value)}
          />
        </div>
        <div>
          <label>Customer Interaction Skills:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={customerInteractionSkills}
            onChange={(e) => setCustomerInteractionSkills(e.target.value)}
          />
        </div>
        <div>
          <label>Overall Rating:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={overallRating}
            onChange={(e) => setOverallRating(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppraisalForm;
