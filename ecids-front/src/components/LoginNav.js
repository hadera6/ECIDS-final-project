import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon , MDBBtn} from "mdbreact";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import '../index.css';
class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });

}

render() {
  return (
      <MDBNavbar color="" dark expand="md" className="header-nav  top-nav">
        <MDBNavbarBrand>
          <img className="logo-img" src="logo1.jpg" />
          <strong className="white-text" id="logo" >ECIDS</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
            <MDBBtn onClick={()=>{window.location.href="/intro/signup"}} color="primary">Signup</MDBBtn>
            </MDBNavItem>

            <MDBNavItem>
            <MDBBtn onClick={()=>{window.location.href="/intro"}}color="primary">Login</MDBBtn>
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
export default NavbarPage;