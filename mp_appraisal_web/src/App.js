// import logo from './logo.svg';
import './App.css';
// modify below code and add Approutings.js component to it
import React from 'react'
import Approutings from './main/Approutings'
import {
  BrowserRouter as Router,
  Route,
  
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
          <Route path="" component={Approutings} />
        </Router>
    </div>
  );
}

export default App;
