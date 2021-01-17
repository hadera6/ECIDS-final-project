import React , { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

class RegisterCitizen extends Component {
  
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
                

                />
                <span className="red-text">{errors.name}</span>
                <br />
                <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                  Your email
                </label>
                <input type="email"  className="form-control" 
                    
                
                />
                <span className="red-text">{errors.email}</span>
                <br />
                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                  Confirm your email
                </label>
                <input type="password" className="form-control" 
                
                />
                <span className="red-text">{errors.password}</span>
                <br />
                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                  Your password
                </label>
                <input type="password" className="form-control" 

                />
                <span className="red-text">{errors.password2}</span>
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
export default RegisterCitizen;