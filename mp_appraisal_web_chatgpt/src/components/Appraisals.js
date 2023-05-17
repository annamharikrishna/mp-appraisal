import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { APPRAISAL_BASE_URL } from "../config/config.environment";

const AppraisalForm = ({ location }) => {
  const [formData, setFormData] = useState(location.state);
  const { handleSubmit, control, formState: { errors } } = useForm();

  const handleFormSubmit = (data) => {
    data['user_id'] = localStorage.getItem('userId');
    // data['employee_id'] = location.state.employee_id;
    data['employee_id'] = formData.employee_id;
    fetch(APPRAISAL_BASE_URL + 'api/appraisalentry/get_employee_appraisal_form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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
  }

  console.log(formData, formData.product_knowledge)

  return (
    <form className="appraisal-form" onSubmit={handleSubmit(handleFormSubmit)}>
      <h3>Employee Appraisal</h3>
      <div className="form-group">
        <label htmlFor="productKnowledge">Product Knowledge:</label>
        <Controller
          name="productKnowledge"
          control={control}
          defaultValue={formData.product_knowledge}
          rules={{ required: 'Product Knowledge is required' }}
          render={({ field }) => (
            <select
              id="productKnowledge"
              className={`form-control ${errors.productKnowledge ? 'is-invalid' : ''}`}
              {...field}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        />
        {errors.productKnowledge && <span className="error-message">{errors.productKnowledge.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="systemKnowledge">System Knowledge:</label>
        <Controller
          name="systemKnowledge"
          control={control}
          defaultValue={formData.system_knowledge}
          rules={{ required: 'System Knowledge is required' }}
          render={({ field }) => (
            <select
              id="systemKnowledge"
              className={`form-control ${errors.systemKnowledge ? 'is-invalid' : ''}`}
              {...field}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        />
        {errors.systemKnowledge && <span className="error-message">{errors.systemKnowledge.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="salesPromotionSkills">Sales Promotion Skills:</label>
        <Controller
          name="salesPromotionSkills"
          control={control}
          defaultValue={formData.sales_promotion_skills}
          rules={{ required: 'Sales Promotion Skills is required' }}
          render={({ field }) => (
            <select
              id="salesPromotionSkills"
              className={`form-control ${errors.salesPromotionSkills ? 'is-invalid' : ''}`}
              {...field}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        />
        {errors.salesPromotionSkills && <span className="error-message">{errors.salesPromotionSkills.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="privateLabelPromotionSkills">Private Label Promotion Skills:</label>
        <Controller
          name="privateLabelPromotionSkills"
          control={control}
          defaultValue={formData.private_label_promotion_skills}
          rules={{ required: 'Private Label Promotion Skills is required' }}

          render={({ field }) => (
            <select
              id="privateLabelPromotionSkills"
              className={`form-control ${errors.privateLabelPromotionSkills ? 'is-invalid' : ''}`}
              {...field}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        />
        {errors.privateLabelPromotionSkills && <span className="error-message">{errors.privateLabelPromotionSkills.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="customerInteractionSkills">Customer Interaction Skills:</label>
        <Controller
          name="customerInteractionSkills"
          control={control}
          defaultValue={formData.customer_interaction_skills}
          rules={{ required: 'Customer Interaction Skills is required' }}
          render={({ field }) => (
            <select
              id="customerInteractionSkills"
              className={`form-control ${errors.customerInteractionSkills ? 'is-invalid' : ''}`}
              {...field}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        />
        {errors.customerInteractionSkills && <span className="error-message">{errors.customerInteractionSkills.message}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="overallRating">Overall Rating:</label>
        <Controller
          name="overallRating"
          control={control}
          defaultValue={formData.overall_rating}
          rules={{ required: 'Overall Rating is required' }}
          render={({ field }) => (
            <select
              id="overallRating"
              className={`form-control ${errors.overallRating ? 'is-invalid' : ''}`}
              {...field}
            >
              <option value="">Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          )}
        />
        {errors.overallRating && <span className="error-message">{errors.overallRating.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default AppraisalForm;