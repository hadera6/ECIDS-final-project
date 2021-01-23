import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, 
  MDBInput,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink} from 'mdbreact';

class ASetting extends React.Component {
  state = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    password2: "",

  };

  submitHandler = event => {

    event.preventDefault();
    event.target.className += " was-validated";

  }
  
  changeHandler = event => {
    
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      
      <MDBCard>
      <MDBCardBody className="mx-4 mt-4">
      <MDBContainer>
      <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="fname"
                label="First name"
                required
                istext
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="lname"
                label="Last name"
                required
              />
            </MDBCol>
            
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
                <MDBInput
                  value={this.state.email}
                  onChange={this.changeHandler}
                  type="email"
                  id="email"
                  name="email"
                  label="Your Email address"
                  required
                  
                />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.password}
                onChange={this.changeHandler}
                type="password"
                id="password"
                name="password"
                label="Password"
                required 
              />
            </MDBCol>
            
          </MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.password2}
                onChange={this.changeHandler}
                type="password"
                id="password2"
                name="password2"
                label="Confirm Password"
                required
              />
            </MDBCol> 
          <MDBRow>

          </MDBRow>
          <MDBBtn color="success" type="submit">
            Change
          </MDBBtn>
        </form>
      </MDBContainer>
      </MDBCardBody>
      </MDBCard>
    );
  }
}

export default ASetting;