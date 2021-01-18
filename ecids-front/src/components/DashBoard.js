import React, { Component } from 'react';
import Routes from './Routes';
import TopNavigation from './TopNavigation.js';
import SideNavigation from './SideNavigation.js';
import '../index.css';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

class DashBoard extends Component {
  onLogoutClick = e => {

  e.preventDefault();
  this.props.logoutUser();
    
  };
  render() {
  
    const { user } = this.props.auth;
  return (
      
      <div className="flexible-content">
    
        <TopNavigation onLClick={this.onLogoutClick}/>
        <SideNavigation type="employee"/>
        <main id="content" className="p-5">
          <Routes type="employee"/>
        </main>
        
      </div>
    );
  }
}
DashBoard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(DashBoard);