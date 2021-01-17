import { Switch , BrowserRouter as Router , Route} from 'react-router-dom';
import React, { Component } from 'react';
import Signup from './Signup.js';
import Footer from './Footer.js';
import Login from'./Login.js';
import LoginNav from'./LoginNav.js';
import '../index.css';

class LoginPage extends Component {
  
  render() {
    return (
      <div className="flexible-content">

        <LoginNav />
    
        <Route path='/' exact  component={Login} />
        <Route path='/intro' exact  component={Login} />
        <Route path='/intro/signup' component={Signup} />         
             
      </div>
    );
  }
}
export default LoginPage;
