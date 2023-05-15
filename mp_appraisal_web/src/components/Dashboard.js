// create a basic dashboard page
// Solution:
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import useAxios from '../hooks/useAxios'
import { logout } from './Authentication'
import { getAllApprialsFormsData } from './service'
//
const Dashboard = () => {
    // create a random data list that contains 3 objects and each object of following keys userName, ProductKnowledge, systemKnowledge, salesPromotionSkills, privateLabelPromotionSkills, customerInteraction-Skills, Overall-Rating and values must be random numbers.
    const [popUpData, setPopUpData] = useState({})
    const [showPopup, setShowPopup] = useState(false)
    const [
        response,
        error,
        loading,
        axiosFetch,
        setError,
      ] = useAxios();
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
        setPopUpData(e)
        setShowPopup(true)

    }
    useEffect(() => {
        console.log(popUpData)
        if (popUpData?.userName) {
        }
    }, [popUpData])

    // write to fetch data of getAllAppraisalFromData API using useEffect and store that data in a state.
    useEffect(() => {
        const userId = localStorage.getItem('userId')
        // axiosFetch(getAllApprialsFormsData({ user_id: userId }));
      }, []);



    const history = useHistory()

    const handleEdit = (data) => {
        history.push({
            pathname: '/appraisal',
            state: data
        })
    }

    return (
        <div className="dashboard-page">
            {showPopup && <div className="popup">
                <div className="popup-inner">
                    <div className="popup-close" onClick={() => setShowPopup(false)}>X</div>
                    <div className="popup-content">
                        <h1>{popUpData?.userName}</h1>
                        <p>Product Knowledge: {popUpData?.ProductKnowledge}</p>
                        <p>System Knowledge: {popUpData?.systemKnowledge}</p>
                        <p>Sales Promotion Skills: {popUpData?.salesPromotionSkills}</p>
                        <p>Private Label Promotion Skills: {popUpData?.privateLabelPromotionSkills}</p>
                        <p>Customer Interaction Skills: {popUpData?.customerInteractionSkills}</p>
                        <p>Overall Rating: {popUpData?.OverallRating}</p>
                    </div>
                </div>
            </div>}
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
                                    <button onClick={()=>handleEdit(item)} className="edit-btn">Edit</button>
                                    <button onClick={() => handlePopUp(item)} className="view-btn">View</button>
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
