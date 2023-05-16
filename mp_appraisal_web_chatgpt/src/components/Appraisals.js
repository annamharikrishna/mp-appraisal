import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AppraisalForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const handleFormSubmit = (e) => {
    // e.preventDefault();

    
    console.log(e)

    // fetch('https://example.com/get_employee_appraisal_form', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the API response as needed
    //     console.log(data);
    //   })
    //   .catch((error) => {
    //     // Handle any error that occurred during the API call
    //     console.error(error);
    //   });
  };


  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="appraisal-form">
      <h3>Employee Appraisal</h3>
      <div className="form-group">
        <label htmlFor="productKnowledge">Product Knowledge:</label>
        <Controller
          name="productKnowledge"
          control={control}
          defaultValue=""
          rules={{ required: 'Product Knowledge is required' }}
          render={({ field }) => (
            <input
              type="number"
              id="productKnowledge"
              className={errors.productKnowledge ? 'input-field error' : 'input-field'}
              {...field}
            />
          )}
        />
        {errors.productKnowledge && <span className="error-message">{errors.productKnowledge.message}</span>}
      </div>

      <div>
        <label htmlFor="systemKnowledge">System Knowledge:</label>
        <Controller
          name="systemKnowledge"
          control={control}
          defaultValue=""
          rules={{ required: 'System Knowledge is required' }}
          render={({ field }) => (
            <input
              type="number"
              id="systemKnowledge"
              className={errors.systemKnowledge ? 'input-field error' : 'input-field'}
              {...field}
            />
          )}
        />
        {errors.systemKnowledge && <span className="error-message">{errors.systemKnowledge.message}</span>}
      </div>

      <div>
        <label htmlFor="salesPromotionSkills">Sales Promotion Skills:</label>
        <Controller
          name="salesPromotionSkills"
          control={control}
          defaultValue=""
          rules={{ required: 'Sales Promotion Skills is required' }}
          render={({ field }) => (
            <input
              type="number"
              id="salesPromotionSkills"
              className={errors.salesPromotionSkills ? 'input-field error' : 'input-field'}
              {...field}
            />
          )}
        />
        {errors.salesPromotionSkills && <span className="error-message">{errors.salesPromotionSkills.message}</span>}
      </div>

      <div>
        <label htmlFor="privateLabelPromotionSkills">Private Label Promotion Skills:</label>
        <Controller
          name="privateLabelPromotionSkills"
          control={control}
          defaultValue=""
          rules={{ required: 'Private Label Promotion Skills is required' }}
          render={({ field }) => (
            <input
              type="number"
              id="privateLabelPromotionSkills"
              className={errors.privateLabelPromotionSkills ? 'input-field error' : 'input-field'}
              {...field}
            />
          )}
        />
        {errors.privateLabelPromotionSkills && <span className="error-message">{errors.privateLabelPromotionSkills.message}</span>}
      </div>

      <div>
        <label htmlFor="customerInteractionSkills">Customer Interaction Skills:</label>
        <Controller
          name="customerInteractionSkills"
          control={control}
          defaultValue=""
          rules={{ required: 'Customer Interaction Skills is required' }}
          render={({ field }) => (
            <input
              type="number"
              id="customerInteractionSkills"
              className={errors.customerInteractionSkills ? 'input-field error' : 'input-field'}
              {...field}
            />
          )}
        />
        {errors.customerInteractionSkills && <span className="error-message">{errors.customerInteractionSkills.message}</span>}
      </div>

      <div>
        <label htmlFor="overallRating">Overall Rating (1-5):</label>
        <Controller
          name="overallRating"
          control={control}
          defaultValue=""
          rules={{
            required: 'Overall Rating is required',
            min: {
              value: 1,
              message: 'Overall Rating must be at least 1',
            },
            max: {
              value: 5,
              message: 'Overall Rating must be at most 5',
            },
          }}
          render={({ field }) => (
            <input
              type="number"
              id="overallRating"
              className={errors.overallRating ? 'input-field error' : 'input-field'}
              {...field}
            />
          )}
        />
        {errors.overallRating && <span className="error-message">{errors.overallRating.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AppraisalForm;
