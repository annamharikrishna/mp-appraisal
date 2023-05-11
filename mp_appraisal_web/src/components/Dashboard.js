// create a basic dashboard page
// Solution:
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from './Authentication'
//
const Dashboard = () => {
    // create a random data list that contains 3 objects and each object of following keys ProductKnowledge, systemKnowledge, salesPromotionSkills, privateLabelPromotionSkills, customerInteraction-Skills, Overall-Rating and values must be random numbers.
    const [data, setData] = useState([
        {
            ProductKnowledge: 1,
            systemKnowledge: 2,
            salesPromotionSkills: 3,
            privateLabelPromotionSkills: 4,
            customerInteractionSkills: 5,
            OverallRating: 6
        },
        {
            ProductKnowledge: 7,
            systemKnowledge: 8,
            salesPromotionSkills: 9,
            privateLabelPromotionSkills: 10,
            customerInteractionSkills: 11,
            OverallRating: 12
        },
        {
            ProductKnowledge: 13,
            systemKnowledge: 14,
            salesPromotionSkills: 15,
            privateLabelPromotionSkills: 16,
            customerInteractionSkills: 17,
            OverallRating: 18
        }
    ])
    const history = useHistory()
    /*
        Now show eact object in a data as a card and give edit button which will redirect to the appraisal page and show the data of that object in the appraisal page.
    */
    const handleEdit = (e) => {
        e.preventDefault()
        history.push('/appraisal')
    }
    const handleLogout = (e) => {
        e.preventDefault()
        logout(() => {
            history.push('/')
        })
    }
    return (
        <div className='dashboard'>
            <h1>Dashboard</h1>
            <div className='dashboard-cards'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='dashboard-card'>
                            <h2>Product Knowledge: {item.ProductKnowledge}</h2>
                            <h2>System Knowledge: {item.systemKnowledge}</h2>
                            <h2>Sales Promotion Skills: {item.salesPromotionSkills}</h2>
                            <h2>Private Label Promotion Skills: {item.privateLabelPromotionSkills}</h2>
                            <h2>Customer Interaction Skills: {item.customerInteractionSkills}</h2>
                            <h2>Overall Rating: {item.OverallRating}</h2>
                            <button onClick={handleEdit}>Edit</button>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}
export default Dashboard


