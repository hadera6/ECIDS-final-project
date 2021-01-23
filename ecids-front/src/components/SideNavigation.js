import React from 'react';
import logo from "../assets/logo1.jpg";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import '../index.css';

const SideNavigation = (props) => {
    
    switch (props.type) {
        case 'user':
            return(
            <div className="sidebar-fixed  position-fixed side-nav">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard/homepage" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Home page
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/verifyid" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Verify Id
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/detailcitizen" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Citize detail
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/usetting" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Setting
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>);
        break;
        case 'admin':
            return(
                <div className="sidebar-fixed  position-fixed side-nav">
                <a href="#!" className="logo-wrapper waves-effect">

                    <img alt="MDB React Logo" className="img-fluid" src={logo}/>
                </a>
                <MDBListGroup className="list-group-flush">
                    <NavLink exact={true} to="/dashboard/addemployee" activeClassName="activeClass">
                        <MDBListGroupItem className="side-nav">
                        <MDBIcon icon="user" className="mr-3"/>
                            Add Employee
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/dashboard/transaction" activeClassName="activeClass">
                        <MDBListGroupItem className="side-nav">
                        <MDBIcon icon="user" className="mr-3"/>
                            Transaction
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/dashboard/postnotification" activeClassName="activeClass">
                        <MDBListGroupItem className="side-nav">
                        <MDBIcon icon="user" className="mr-3"/>
                            Post Notification
                        </MDBListGroupItem >
                    </NavLink>
                    <NavLink to="/dashboard/asetting" activeClassName="activeClass">
                        <MDBListGroupItem className="side-nav">
                        <MDBIcon icon="user" className="mr-3"/>
                            Setting
                        </MDBListGroupItem>
                    </NavLink>
                    <NavLink to="/dashboard/report" activeClassName="activeClass">
                        <MDBListGroupItem className="side-nav">
                        <MDBIcon icon="user" className="mr-3"/>
                            Report
                        </MDBListGroupItem>
                    </NavLink>
                </MDBListGroup>
                </div>
            );
          break;
        case 'employee':
            return(
            <div className="sidebar-fixed  position-fixed side-nav ">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="MDB React Logo" className="img-fluid" src={logo}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/dashboard/registercitizen" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Add Citizen
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/modifycitizen" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                        <MDBIcon icon="user" className="mr-3"/>
                        Update Citizen
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/prepareid" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Prepare ID
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/dashboard/notification" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Notification
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/dashboard/esetting" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Setting
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/dashboard/banservice" activeClassName="activeClass">
                    <MDBListGroupItem className="side-nav">
                    <MDBIcon icon="user" className="mr-3"/>
                        Ban service
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
            )
      }
    
}

export default SideNavigation;