// Creation of a basic Appraisal page which contains the form fields Product Knowledge, System Knowledge, Sales Promotion Skills, Private Label Promotion Skills, Customer Interaction Skills, Overall Rating - Rating on a scale of 1-5
//
// Solution:
// create Appraisal.js file in src/components folder and add the following code:
// // create a basic Appraisal page which contains the form fields Product Knowledge, System Knowledge, Sales Promotion Skills, Private Label Promotion Skills, Customer Interaction Skills, Overall Rating - Rating on a scale of 1-5
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from './Authentication'
import Header from './header'

const Appraisal = () => {
    const [productKnowledge, setProductKnowledge] = useState('')
    const [systemKnowledge, setSystemKnowledge] = useState('')
    const [salesPromotionSkills, setSalesPromotionSkills] = useState('')
    const [privateLabelPromotionSkills, setPrivateLabelPromotionSkills] = useState('')
    const [customerInteractionSkills, setCustomerInteractionSkills] = useState('')
    const [overallRating, setOverallRating] = useState('')
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push('/')
    }

    return (
        <div className="appraisal-page">
            <Header />
            <div className = "appraisal-form">
            <h1>Appraisal</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Product Knowledge: </label>
                    <input type="text" name="productKnowledge" value={productKnowledge} onChange={(e) => setProductKnowledge(e.target.value)} />
                </div>
                <div>
                    <label>System Knowledge: </label>
                    <input type="text" name="systemKnowledge" value={systemKnowledge} onChange={(e) => setSystemKnowledge(e.target.value)} />
                </div>
                <div>
                    <label>Sales Promotion Skills: </label>
                    <input type="text" name="salesPromotionSkills" value={salesPromotionSkills} onChange={(e) => setSalesPromotionSkills(e.target.value)} />
                </div>
                <div>
                    <label>Private Label Promotion Skills: </label>
                    <input type="text" name="privateLabelPromotionSkills" value={privateLabelPromotionSkills} onChange={(e) => setPrivateLabelPromotionSkills(e.target.value)} />
                </div>
                <div>
                    <label>Customer Interaction Skills: </label>
                    <input type="text" name="customerInteractionSkills" value={customerInteractionSkills} onChange={(e) => setCustomerInteractionSkills(e.target.value)} />
                </div>
                <div>
                    <label>Overall Rating: </label>
                    <input type="text" name="overallRating" value={overallRating} onChange={(e) => setOverallRating(e.target.value)} />
                </div>
                <button type="submit" className='submit'>Submit</button>
            </form>
            </div>
        </div>
    )
}

export default Appraisal
