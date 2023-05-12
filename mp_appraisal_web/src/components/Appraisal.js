// Creation of a basic Appraisal page which contains the form fields Product Knowledge, System Knowledge, Sales Promotion Skills, Private Label Promotion Skills, Customer Interaction Skills, Overall Rating - Rating on a scale of 1-5
//
// Solution:
// create Appraisal.js file in src/components folder and add the following code:
// // create a basic Appraisal page which contains the form fields Product Knowledge, System Knowledge, Sales Promotion Skills, Private Label Promotion Skills, Customer Interaction Skills, Overall Rating - Rating on a scale of 1-5
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import { logout } from './Authentication'
import { submitAppraisal } from './service'


const Appraisal = ({location}) => {
    const [productKnowledge, setProductKnowledge] = useState(location.state?.ProductKnowledge)
    const [systemKnowledge, setSystemKnowledge] = useState(location.state?.systemKnowledge)
    const [salesPromotionSkills, setSalesPromotionSkills] = useState(location.state?.salesPromotionSkills)
    const [privateLabelPromotionSkills, setPrivateLabelPromotionSkills] = useState(location.state?.privateLabelPromotionSkills)
    const [customerInteractionSkills, setCustomerInteractionSkills] = useState(location.state?.customerInteractionSkills)
    const [overallRating, setOverallRating] = useState(location.state?.OverallRating)
    const history = useHistory()
    const [isOverallRating, setIsOverallRating] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [response, error, loading, axiosFetch, setError] = useAxios()
    const [comments, setComments] = useState('')
    const handleSubmit = (e) => {
        console.log(e)
        e.preventDefault()
        let data = {
            employee_id: localStorage.getItem('employee_id'),
            product_knowledge: productKnowledge,
            system_knowledge: systemKnowledge,
            sales_promotion_skills: salesPromotionSkills,
            private_label_promotion_skills: privateLabelPromotionSkills,
            customer_interaction_skills: customerInteractionSkills,
            overall_rating: overallRating,
            user_id: localStorage.getItem('employee_id'),
            comments: comments
        }
        axiosFetch(submitAppraisal(data))
        
        console.log(data)
        history.push('/dashboard')
    }

    useEffect(()=>{
        console.log(location)
        let role= localStorage.getItem('userRole')
        console.log(role && role==='employee')
        setIsOverallRating(role && role==='employee')
    }, [])

    return (
        <div className="appraisal-page">
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
                    <input type="text" name="overallRating" disabled={!isOverallRating} value={overallRating} onChange={(e) => setOverallRating(e.target.value)} />
                </div>
                <div>
                    <label>Comments: </label>
                    <input type="text" name="overallRating" value={comments} onChange={(e) => setComments(e.target.value)} />
                </div>
                <button type="submit" className='submit'>Submit</button>
                {submitted && <div className="submitted">Submitted Successfully</div>}
            </form>
            </div>
        </div>
    )
}

export default Appraisal
