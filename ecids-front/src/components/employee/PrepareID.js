import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';

class PrepareID extends Component {

 
  render() {
    return (
      <MDBCard className="mb-5">
      <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
          <MDBBreadcrumb>
              <MDBBreadcrumbItem>ID Card</MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>Prepare</MDBBreadcrumbItem>
          </MDBBreadcrumb>
          <MDBFormInline className="md-form m-0">
              <input className="form-control form-control-sm" type="search" placeholder="Type your query" aria-label="Search"/>
              <MDBBtn size="sm" color="primary" className="my-0" type="submit"><MDBIcon icon="search" /></MDBBtn>
          </MDBFormInline>
      </MDBCardBody>
  </MDBCard>




    );
  }
}

export default PrepareID;
