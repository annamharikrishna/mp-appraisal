// create a login page for an employee with fields for username and password and it should redirect to the appraisal page if the credentials are correct without using useHistory() hook.

// Solution:
// create Login.js file in src/components folder and add the following code:
// // create login page for an employee with fields for username and password and it should redirect to the appraisal page if the credentials are correct without using useHistory() hook.
// import React from 'react'
// import { useState } from 'react'


import * as React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { authenticate, isAuthenticated } from './Authentication'
import withRouter from 'react'
const Login = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === 'admin' && password === 'admin') {
            authenticate(() => {
                props.history.push('/appraisal')
            })
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default withRouter(Login)