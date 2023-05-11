// create a basic dashboard page
// Solution:
import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { logout } from './Authentication'
//
const Dashboard = () => {
    // create a random data list that contains 3 objects and each object of following keys userName, ProductKnowledge, systemKnowledge, salesPromotionSkills, privateLabelPromotionSkills, customerInteraction-Skills, Overall-Rating and values must be random numbers.
    const [data, setData] = useState([
        {
            userName: 'user1',
            ProductKnowledge: 4,
            systemKnowledge: 3,
            salesPromotionSkills: 4,
            privateLabelPromotionSkills: 5,
            customerInteractionSkills: 3,
            OverallRating: 4
        },
        {
            userName: 'user2',
            ProductKnowledge: 3,
            systemKnowledge: 4,
            salesPromotionSkills: 5,
            privateLabelPromotionSkills: 4,
            customerInteractionSkills: 3,
            OverallRating: 4
        },
        {
            userName: 'user3',
            ProductKnowledge: 4,
            systemKnowledge: 3,
            salesPromotionSkills: 4,
            privateLabelPromotionSkills: 5,
            customerInteractionSkills: 3,
            OverallRating: 4
        }
    ])

    // create a function that takes object as props that contains userName, ProductKnowledge, systemKnowledge, salesPromotionSkills, privateLabelPromotionSkills, customerInteraction-Skills, Overall-Rating and show them in a card as a pop up.
    const handlePopUp = (e) => {
        //  create a pop up that contains all the data of that object.
        return (
            <div className="popup">
                <div className="popup-inner">
                    <h1>{e.userName}</h1>
                    <p>Product Knowledge: {e.ProductKnowledge}</p>
                    <p>System Knowledge: {e.systemKnowledge}</p>
                    <p>Sales Promotion Skills: {e.salesPromotionSkills}</p>
                    <p>Private Label Promotion Skills: {e.privateLabelPromotionSkills}</p>
                    <p>Customer Interaction Skills: {e.customerInteractionSkills}</p>
                    <p>Overall Rating: {e.OverallRating}</p>
                </div>
            </div>
        )

    }


    const history = useHistory()
    //  Now show eact object in a data as a card and give edit button which will redirect to the appraisal page and show the data of that object in the appraisal page. that card contains only userName and OverallRating
    const handleEdit = (e) => {
        history.push('/appraisal')
    }
    //  Now show eact object in a data as a card and give view button which will redirect to the appraisal page and show the data of that object in the appraisal page. that card contains all the data of that object.
    const handleView = (e) => {
        history.push('/appraisal')
    }
    
    return (
        <div className="dashboard-page">
            <div className="dashboard-form">
                <h1>Dashboard</h1>
                <div className="dashboard-cards">
                    {data.map((item, index) => {
                        return (
                            <div className="card" key={index}>
                                <div className="card-header">
                                    <h3>{item.userName}</h3>
                                </div>
                                <div className="card-body">
                                    <p>Overall Rating: {item.OverallRating}</p>
                                </div>
                                <div className="card-footer">
                                    <button onClick={handleEdit} className="edit-btn">Edit</button>
                                    <button onClick={(item)=>handlePopUp(item)} className="view-btn">View</button>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div>
    )

}
export default Dashboard


