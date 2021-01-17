import React, { Component } from 'react';
import { MDBCard, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem,MDBFormInline, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBBtn, MDBIcon } from 'mdbreact';

class BanService extends Component {
  
  render() {
    return (

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

      <MDBCardImage className="img-fluid"  /> 
      <MDBCardBody>
          <MDBCardTitle className="text-center mb-2 font-bold">Hadera Teame</MDBCardTitle>
          <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">Student</MDBCardTitle>
          <MDBCardText>
              <strong className="mb-2">About:</strong>
              This Id is not applicable. can no use be used on banks and aviation
          </MDBCardText>
          <div className="row justify-content-end pr-1">
              <MDBBtn size="sm" outline color="primary">Block</MDBBtn>
              <MDBBtn size="sm" outline color="primary">UnBlock</MDBBtn>
          </div>
      </MDBCardBody>
      </MDBCard>
    );
  }
}

export default BanService;
