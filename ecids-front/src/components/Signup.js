import React , { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn,MDBInput,MDBCardBody, MDBCard} from 'mdbreact';
import '../index.css';
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      role: "",
      fname: "",
      username: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ 
      
      [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      role: this.state.role,
      fname: this.state.fname,
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };
  this.props.registerUser(newUser, this.props.history); 
  };
render() {
    const { errors } = this.state;
return (
        <MDBContainer className="form-register">
          <MDBRow>
            <MDBCol md="2" lg="3">
            </MDBCol>
            <MDBCol md="8" lg="6">
            <MDBCard>

            <div className="header pt-3 form-header lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                  <center>Signup</center>
                </h3>
              </MDBRow>
            </div>

            <MDBCardBody className="mx-4 mt-4">

            <form noValidate onSubmit={this.onSubmit}>
                
                <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                  Your Role
                </label>

                <div>
                  <select className="browser-default custom-select" id="role" 
                  
                  value={this.state.role}
                  onChange={this.onChange}
                  
                  >
                    <option value="admin">Admin</option>
                    <option value="employee">Employee</option>
                    <option value="user">User</option>
                  </select>
                </div>

                <MDBInput
                
                  onChange={this.onChange}
                  value={this.state.fname}
                  error={errors.fname}
                  id="fname"
                  type="text"
                  placeholder="First Name"
                  label="First Name"

                  className={classnames("form-control", {
                    invalid: errors.fname
                  })}

                />
                <span className="red-text">{errors.fname}</span>
               
                <MDBInput
                
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  placeholder="User name"
                  label="User Name"

                  className={classnames("form-control", {
                    invalid: errors.username
                  })}

                />
                <span className="red-text">{errors.username}</span>
              
                
                <MDBInput   

                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                  label="Password"

                  className={classnames("form-control", {
                    invalid: errors.password
                  })}

                />
                <span className="red-text">{errors.password}</span>
               
                
                <MDBInput

                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  placeholder="Confirm Password"
                  label="Confirm password"
                  
                  className={classnames("form-control", {
                    invalid: errors.password2
                  })}

                />
                <span className="red-text">{errors.password2}</span>
                <br />
                
                <div className="text-center mt-4">
                  <MDBBtn color="blue" type="submit">
                    Signup
                  </MDBBtn>
                </div>
              </form>
              </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        );
      }
};

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));