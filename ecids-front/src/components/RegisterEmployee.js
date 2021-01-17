import React , { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class RegisterEmployee extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
  };
render() {
    const { errors } = this.state;
  return (
    <MDBContainer className="form-register">
      <MDBRow>
        <MDBCol md="2" lg="3">
        </MDBCol>
        <MDBCol md="8" lg="6">
          <form>
            <p className="h4 text-center mb-4">Sign up</p>
            <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
              Your name
            </label>
            <input type="text"  className="form-control" 
            
              onChange={this.onChange}
              value={this.state.name}
              error={errors.name}
              id="name"

            />
            <br />
            <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
              Your email
            </label>
            <input type="email"  className="form-control" 
                
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
            
            />
            <br />
            <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
              Confirm your email
            </label>
            <input type="password" className="form-control" 

              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
            
            />
            <br />
            <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
              Your password
            </label>
            <input type="password" className="form-control" 

              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
            />
            <div className="text-center mt-4">
              <MDBBtn color="unique" type="submit">
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
};

export default RegisterEmployee;