import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AppraisalForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <form className="appraisal-form" onSubmit={handleSubmit(onSubmit)}>
      <h3>Employee Appraisal</h3>
      <div className="form-group">
        <label htmlFor="productKnowledge">Product Knowledge:</label>
        <Controller
          name="productKnowledge"
          control={control}
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
          defaultValue=""
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
