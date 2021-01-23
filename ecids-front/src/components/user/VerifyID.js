import React, { Component } from 'react';
import { MDBCard, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem,MDBFormInline, 
  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, 
  MDBBtn, MDBIcon, MDBContainer, MDBRow } from 'mdbreact';

  import logo from "../../assets/logo1.jpg";

class VerifyID extends Component {
  
  render() {
    return (

    <div>
      <MDBCard className="mb-5">
      <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
          <MDBBreadcrumb>
              <MDBBreadcrumbItem>BanService</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Bank</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <MDBFormInline className="md-form m-0">
              <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
              <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
          </MDBFormInline>
      </MDBCardBody>
      
      
      </MDBCard>

      <MDBContainer>
      <MDBRow>
        <MDBCol md="2" lg="4">
        </MDBCol>
        <MDBCol md="8" lg="4">
        <MDBCard>
          <MDBCardImage className="img-fluid"  src={logo} /> 
          <MDBCardBody>
              <MDBCardTitle className="text-center mb-2 font-bold">HT08098093</MDBCardTitle>
              <MDBCardTitle sub className="indigo-text mb-2 font-bold">Name : {}</MDBCardTitle>
              <MDBCardTitle sub className="indigo-text mb-2 font-bold">Address {}</MDBCardTitle>
              <MDBCardTitle sub className="indigo-text mb-2 font-bold">Phone </MDBCardTitle>
              <MDBCardTitle sub className="indigo-text mb-2 font-bold">Bloode type: {}</MDBCardTitle>
              <MDBCardTitle sub className="indigo-text mb-2 font-bold">Job:</MDBCardTitle>
              <div className="header pt-3 form-header lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    <center></center>
                  </h3>
                </MDBRow>
              </div>
              <MDBCardText>
                  <strong className="mb-2">About:</strong>
                  This Id is not applicable. can no use be used on banks and aviation
              </MDBCardText>
          </MDBCardBody>
        </MDBCard>
        </MDBCol>
       </MDBRow>
       </MDBContainer>
    </div>
    );
  }
}

export default VerifyID;
