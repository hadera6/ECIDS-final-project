import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, 
  MDBInput,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink} from 'mdbreact';
import axios from "axios"

class AddCitizen extends React.Component {
  state = {
    fname: "",
    lname: "",
    motherName: "",
    fatherName: "",
    emergency_name: "",
    emergency_number: "",
    sex : "",
    age: 0,
    address: "",
    placebirth: "",
    datebirth: "",
    nationality: "",
    job: "",
    homenum: "",
    phonenum: "",
    regdate: "",
    bloodtype: "",
    maritalstatus: "",
    educationstatus: "",
    photo: "",
    document: ""
  
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRadioClick = gender => () => {
    this.setState({
      sex: gender
    });
  };

  render() {
    return (
  
      <MDBCard>

      <MDBCardBody className="mx-4 mt-4">
        
        <form
          className="needs-validation"
          onSubmit={this.submitHandler}
          noValidate
        >
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.fname}
                name="fname"
                id="fname"
                type="text"
                className="form-control"
                value={this.state.fname}
                label="First Name"
                autocomplete="off"
                required
              />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.lname}
                name="lname"
                id="lname"
                type="text"
                className="form-control"
                value={this.state.lname}
                label="Last Name"
                required
            />
            </MDBCol>


            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.motherName}
                name="motherName"
                id="motherName"
                type="text"
                className="form-control"
                value={this.state.motherName}
                label="Mothers Name"
                required
            />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.fatherName}
                name="fatherName"
                id="fatherName"
                type="text"
                className="form-control"
                value={this.state.fatherName}
                label="Fathers Name"
                required
            />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onClick={this.onRadioClick("male")}
                checked={this.state.sex === "male" ? true : false}
                label='Male'
                type='radio'
                id='male'
                name='female'
                containerClass='mr-5'
              />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onClick={this.onRadioClick("female")}
                checked={this.state.sex === "female" ? true : false}
                label='Female'
                type='radio'
                id='female'
                name="female"
                containerClass='mr-5'
              />
            </MDBCol>
          </MDBRow>

          <MDBRow>
          <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.age}
                name="age"
                id="age"
                type="text"
                className="form-control"
                value={this.state.age}
                label="Age"
                required
            />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.address}
                name="address"
                id="address"
                type="text"
                className="form-control"
                value={this.state.address}
                label="Address"
                required
            />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.placeBirth}
                name="placeBirth"
                id="placeBirth"
                type="text"
                className="form-control"
                value={this.state.placeBirth}
                label="Place of Birth"
                required
            />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.dateBirth}
                name="dateBirth"
                id="dateBirth"
                type="text"
                className="form-control"
                value={this.state.dateBirth}
                label="Date of Birth"
                required
            />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.nationality}
                name="nationality"
                id="nationality"
                type="text"
                className="form-control"
                value={this.state.nationality}
                label="Nationality"
                required
            />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.job}
                name="job"
                id="job"
                type="text"
                className="form-control"
                value={this.state.job}
                label="Job"
                required
            />
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.homenum}
                name="homenum"
                id="homenum"
                type="text"
                className="form-control"
                value={this.state.homenum}
                label="Home Number"
                required
            />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.phonenum}
                name="phonenum"
                id="phonenum"
                type="text"
                className="form-control"
                value={this.state.phonenum}
                label="Phone Number"
                required
            />
            </MDBCol>

            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.bloodtype}
                name="bloodtype"
                id="bloodtype"
                type="text"
                className="form-control"
                value={this.state.bloodtype}
                label="Blood type"
                required
            />
            </MDBCol>
          </MDBRow>
          <MDBRow>
          <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.maritalstatus}
                name="maritalstatus"
                id="maritalstatus"
                type="text"
                className="form-control"
                value={this.state.maritalstatus}
                label="Marital status"
                required
            />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.educationstatus}
                name="educationstatus"
                id="educationstatus"
                type="text"
                className="form-control"
                value={this.state.educationstatus}
                label="Education status"
                required
            />
            </MDBCol>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.photo}
                name="photo"
                id="photo"
                type="text"
                className="form-control"
                value={this.state.photo}
                label="Photo"
                required
            />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.document}
                name="document"
                id="document"
                type="text"
                className="form-control"
                value={this.state.document}
                label="Evidence Document"
                required
            />
            </MDBCol>

            <MDBCol md="6" lg="6" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.emergency_name}
                name="emergency_name"
                id="emergency_name"
                type="text"
                className="form-control"
                value={this.state.emergency_name}
                label="Person's name to called at emergency"
                required
            />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="6" lg="6" className="mb-3">
              <MDBInput
                onChange={this.changeHandler}
                value={this.state.emergency_num}
                name="emergency_num"
                id="emergency_num"
                type="text"
                className="form-control"
                value={this.state.emergency_num}
                label="Phone number to called at emergency"
                required
            />
            </MDBCol>
          </MDBRow>
          <MDBBtn color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
      </MDBCardBody>
    </MDBCard>
    );
  }
}

export default AddCitizen;