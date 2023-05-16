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
    <form className="appraisal-form" onSubmit={handleFormSubmit}>
      <h3>Employee Appraisal</h3>
      <label htmlFor="productKnowledge">Product Knowledge:</label>
      <input
        type="number"
        id="productKnowledge"
        className="input-field"
        value={productKnowledge}
        onChange={(e) => setProductKnowledge(e.target.value)}
      />

      <label htmlFor="systemKnowledge">System Knowledge:</label>
      <input
        type="number"
        id="systemKnowledge"
        className="input-field"
        value={systemKnowledge}
        onChange={(e) => setSystemKnowledge(e.target.value)}
      />

      <label htmlFor="salesPromotionSkills">Sales Promotion Skills:</label>
      <input
        type="number"
        id="salesPromotionSkills"
        className="input-field"
        value={salesPromotionSkills}
        onChange={(e) => setSalesPromotionSkills(e.target.value)}
      />

      <label htmlFor="privateLabelPromotionSkills">Private Label Promotion Skills:</label>
      <input
        type="number"
        id="privateLabelPromotionSkills"
        className="input-field"
        value={privateLabelPromotionSkills}
        onChange={(e) => setPrivateLabelPromotionSkills(e.target.value)}
      />

      <label htmlFor="customerInteractionSkills">Customer Interaction Skills:</label>
      <input
        type="number"
        id="customerInteractionSkills"
        className="input-field"
        value={customerInteractionSkills}
        onChange={(e) => setCustomerInteractionSkills(e.target.value)}
      />
      <label htmlFor="overAllRating">Overall Rating</label>
      <input
        type="number"
        id="overAllRating"
        className="input-field"
        value={overallRating}
        onChange={(e) => setOverallRating(e.target.value)}
      />
      <br />
      <button type="submit" className="submit-btn" >Submit</button>
    </form>
  );
};

export default AppraisalForm;


