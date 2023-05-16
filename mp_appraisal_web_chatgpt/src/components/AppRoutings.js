import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';
import AppraisalForm from './Appraisals';
import LoginPage from './Login';
import Header from './Header';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
    />
);

const AppRouter = () => {
    // Set isAuthenticated state based on your login logic
    const isAuthenticated = true; // Change this based on your logic

    return (
        <Router>
            <Header />

            <Switch>
                <Route path="/login" component={LoginPage} />
                <ProtectedRoute
                    path="/dashboard"
                    component={Dashboard}
                    isAuthenticated={isAuthenticated}
                />
                <ProtectedRoute
                    path="/appraisal"
                    component={AppraisalForm}
                    isAuthenticated={isAuthenticated}
                />
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
};

export default AppRouter;
