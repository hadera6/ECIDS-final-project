import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

class ASetting extends React.Component {
  state = {
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <form>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.fname}
                name="fname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterNameEx"
                label="First name"
                required
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.lname}
                name="lname"
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterEmailEx2"
                label="Last name"
                required
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.email}
                onChange={this.changeHandler}
                type="email"
                id="materialFormRegisterConfirmEx3"
                name="email"
                label="Your Email address"
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <MDBInput
                value={this.state.city}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="city"
                label="City"
                required
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.state}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="state"
                label="State"
                required
              />
            </MDBCol>
            <MDBCol md="4">
              <MDBInput
                value={this.state.zip}
                onChange={this.changeHandler}
                type="text"
                id="materialFormRegisterPasswordEx4"
                name="zip"
                label="Zip"
                required
              />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBInput
              type="checkbox"
              value="conditions"
              id="materialInvalidCheck"
              required
              label="Agree to terms and conditions"
            />
          </MDBRow>
          <MDBBtn color="success" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </div>
    );
  }
}

export default ASetting;