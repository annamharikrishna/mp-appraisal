import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { APPRAISAL_BASE_URL } from "../config/config.environment";

const AppraisalForm = ({ location }) => {
  const [formData, setFormData] = useState(location.state);
  const [role, setRole] = useState(localStorage.getItem("role"));
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    data["user_id"] = localStorage.getItem("user_id");
    if (formData === undefined) {
      data["employee_id"] = localStorage.getItem("employee_id");
    }
    else {
      data["employee_id"] = formData.employee_id;
    }
    // data["employee_id"] = formData.employee_id;
    if (data?.supervisorRating === "") {
      data["supervisorRating"] = null;
    }
    if (data?.managerRating === "") {
      data["managerRating"] = null;
    }
    fetch(
      APPRAISAL_BASE_URL + "api/appraisalentry/get_employee_appraisal_form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
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
    <>
      { (
        <form
          className="appraisal-form"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <h3>Employee Appraisal</h3>
          <div className="form-group">
            <label htmlFor="productKnowledge">Product Knowledge:</label>
            <Controller
              name="productKnowledge"
              control={control}
              defaultValue={formData?.product_knowledge || null}
              rules={{ required: "Product Knowledge is required" }}
              render={({ field }) => (
                <select
                  id="productKnowledge"
                  className={`form-control ${
                    errors.productKnowledge ? "is-invalid" : ""
                  }`}
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
            {errors.productKnowledge && (
              <span className="error-message">
                {errors.productKnowledge.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="systemKnowledge">System Knowledge:</label>
            <Controller
              name="systemKnowledge"
              control={control}
              defaultValue={formData?.system_knowledge || null}
              rules={{ required: "System Knowledge is required" }}
              render={({ field }) => (
                <select
                  id="systemKnowledge"
                  className={`form-control ${
                    errors.systemKnowledge ? "is-invalid" : ""
                  }`}
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
            {errors.systemKnowledge && (
              <span className="error-message">
                {errors.systemKnowledge.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="salesPromotionSkills">
              Sales Promotion Skills:
            </label>
            <Controller
              name="salesPromotionSkills"
              control={control}
              defaultValue={formData?.sales_promotion_skills || null}
              rules={{ required: "Sales Promotion Skills is required" }}
              render={({ field }) => (
                <select
                  id="salesPromotionSkills"
                  className={`form-control ${
                    errors.salesPromotionSkills ? "is-invalid" : ""
                  }`}
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
            {errors.salesPromotionSkills && (
              <span className="error-message">
                {errors.salesPromotionSkills.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="privateLabelPromotionSkills">
              Private Label Promotion Skills:
            </label>
            <Controller
              name="privateLabelPromotionSkills"
              control={control}
              defaultValue={formData?.private_label_promotion_skills || null}
              rules={{ required: "Private Label Promotion Skills is required" }}
              render={({ field }) => (
                <select
                  id="privateLabelPromotionSkills"
                  className={`form-control ${
                    errors.privateLabelPromotionSkills ? "is-invalid" : ""
                  }`}
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
            {errors.privateLabelPromotionSkills && (
              <span className="error-message">
                {errors.privateLabelPromotionSkills.message}
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="customerInteractionSkills">
              Customer Interaction Skills:
            </label>
            <Controller
              name="customerInteractionSkills"
              control={control}
              defaultValue={formData?.customer_interaction_skills || null}
              rules={{ required: "Customer Interaction Skills is required" }}
              render={({ field }) => (
                <select
                  id="customerInteractionSkills"
                  className={`form-control ${
                    errors.customerInteractionSkills ? "is-invalid" : ""
                  }`}
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
            {errors.customerInteractionSkills && (
              <span className="error-message">
                {errors.customerInteractionSkills.message}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="comments">Comments:</label>
            <Controller
              name="comments"
              control={control}
              defaultValue={formData?.comments || null}
              rules={{ required: "Comment is required" }}
              render={({ field }) => (
                <input
                  id="comments"
                  className={`form-control ${
                    errors.comments ? "is-invalid" : ""
                  }`}
                  {...field}
                />
              )}
            />
            {errors.comments && (
              <span className="error-message">{errors.comments.message}</span>
            )}
          </div>

          {(role === "employee" || role === "supervisor") && (
            <div className="form-group">
              <label htmlFor="supervisorRating">Supervisor Rating:</label>
              <Controller
                name="supervisorRating"
                control={control}
                defaultValue={formData?.supervisor_rating || null}
                // rules={{ required: 'Supervisor Rating is required' }}
                render={({ field }) => (
                  <select
                    id="supervisorRating"
                    disabled={role === "employee"}
                    className={`form-control ${
                      errors.supervisorRating ? "is-invalid" : ""
                    }`}
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
              {errors.supervisorRating && (
                <span className="error-message">
                  {errors.supervisorRating.message}
                </span>
              )}
            </div>
          )}

          {(role === "employee" || role === "manager") && (
            <div className="form-group">
              <label htmlFor="managerRating">Manager Rating:</label>
              <Controller
                name="managerRating"
                control={control}
                defaultValue={formData?.manager_rating || null}
                // rules={{ required: 'Manager Rating is required' }}
                render={({ field }) => (
                  <select
                    id="managerRating"
                    disabled={role === "employee"}
                    className={`form-control ${
                      errors.managerRating ? "is-invalid" : ""
                    }`}
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
              {errors.managerRating && (
                <span className="error-message">
                  {errors.managerRating.message}
                </span>
              )}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="overallRating">Overall Rating:</label>
            <Controller
              name="overallRating"
              control={control}
              defaultValue={formData?.overall_rating || null}
              rules={{ required: "Overall Rating is required" }}
              render={({ field }) => (
                <select
                  id="overallRating"
                  className={`form-control ${
                    errors.overallRating ? "is-invalid" : ""
                  }`}
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
            {errors.overallRating && (
              <span className="error-message">
                {errors.overallRating.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default AppraisalForm;
