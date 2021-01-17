import React , {Component}from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import '../index.css';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const userData = {
      username: this.state.username,
      password: this.state.password
    };
this.props.loginUser(userData);
  };
render() {
    const { errors } = this.state;
return (
     
      <MDBContainer className="form-login" >
        <MDBRow>
          <MDBCol md="2" lg="4">
          </MDBCol>
          <MDBCol md="8" lg="4">
            <MDBCard>
              <div className="header pt-3 form-header lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    <center>Login</center>
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                
              <form noValidate onSubmit={this.onSubmit}>
                <MDBInput label="Username" group  validate 
                  
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"  
                  
                  className={classnames("", {
                    invalid: errors.username || errors.usernamenotfound
                  })}

                />
                <span className="red-text">
                  {errors.username}
                  {errors.usernamenotfound}
                </span>
                
                <MDBInput label="Your password" group validate
                  containerClass="mb-0"
                  
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"

                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                  
                />

                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>

                
                <p className="font-small grey-text d-flex justify-content-end">
                  Forgot
                  <a
                    href="#!"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Password?
                  </a>
                </p>
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    color="blue"
                    type="submit"
                    className="btn-block z-depth-2 log-btn"
                  >
                    Login
                  </MDBBtn>
                </div>
                </form> 
                <p className="font-small grey-text d-flex justify-content-center">
                  Don't have an account?
                  <a
                    href="#!"
                    className="dark-grey-text font-weight-bold ml-1"
                  >
                    Sign up
                  </a>
                </p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    );
  };
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);