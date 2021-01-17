import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import '../index.css';
import { MDBBtn } from "mdbreact";

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (

            <MDBNavbar className="flexible-navbar top-nav" light expand="md" scrolling>
                <MDBNavbarBrand href="/">
                    <strong>ECIDS</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                <MDBNavbarNav left>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                <MDBNavItem>
                    <MDBBtn color="primary"
                    
                        onClick={this.props.onLClick}

                    >Logout</MDBBtn>
                </MDBNavItem>
                
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}
export default TopNavigation;