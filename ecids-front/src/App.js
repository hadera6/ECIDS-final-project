import React, { Component } from 'react';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import DashBoard from'./components/DashBoard.js';
import Login from'./components/Login.js';
import Signup from'./components/Signup.js';
import LoginNav from'./components/LoginNav.js';
import './index.css';

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import PrivateRoute from "./components/private-routes/PrivateRoute";
import LoginPage from './components/LoginPage.js';


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./intro";
  }
}


class App extends Component {
  
  render() {
    return (
      
      <Provider store={store}>
        <Switch>

          <Route path='/' exact component={LoginPage} /> 
          <Route path='/intro' component={LoginPage} />
          <Switch>
            <PrivateRoute path="/dashboard" component={DashBoard} />
          </Switch>
          
        </Switch>
      </Provider>
   
    );
  }
}
export default App;
