import React from 'react'
// create routing for login, appraisal, dashboard, and logout pages and redirect to login page
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Login from '../components/Login'
import Appraisal from '../components/Appraisal'
import Dashboard from '../components/Dashboard'
// import Logout from './components/Logout'
import { isAuthenticated } from '../components/Authentication'

const Approutings = () => {
    const PrivateRoute = (props) => {
        console.log(isAuthenticated())
        if(!isAuthenticated()){
            return <Redirect to='/login' />
        }
        return <Route {...props} />;
    }
    return (
        <div>
            <Router>
                <Switch>
                    <Redirect exact from='/' to='/login' />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute path="/appraisal" component={Appraisal} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    {/* <PrivateRoute path="/logout" component={Logout} /> */}
                </Switch>
            </Router>
        </div>
    )
}

export default Approutings

