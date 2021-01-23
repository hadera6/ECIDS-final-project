import React, { Component } from 'react';
import { MDBCard, MDBCol, MDBBreadcrumb, MDBBreadcrumbItem,MDBFormInline, 
  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, 
  MDBBtn, MDBIcon, MDBContainer, MDBRow } from 'mdbreact';
import logo from "../../assets/logo1.jpg"

class PrepareID extends Component {

 
  render() {
    return (

    <div>

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

    <MDBContainer>
    <MDBRow>
        <MDBCol md="2" lg="2">
          </MDBCol>
        <MDBCol md="8" lg="8">

          <MDBCard>

          <MDBRow>
            <MDBCol md="2" lg="2">
              <MDBCardBody>
              </MDBCardBody>
            </MDBCol>
            <MDBCol md="10" lg="10">
              <MDBCardBody>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            
            <MDBCol md="4" lg="4" >
              <MDBCardBody
                style={
                  {backgroundColor: "#95bae2"},
                  {height:"200px"}
                }
              >
                <MDBCardImage 
                
                  className="img-fluid"  
                  src={logo} 
                  style={
                    {backgroundColor: "#95bae2"},
                    {height:"180px"}
                  }
                />
              </MDBCardBody>
            </MDBCol>
              
            <MDBCol md="8" lg="8">
              <MDBCardBody>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md="12" lg="12">
              <MDBCardBody>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>

          </MDBCard>
        </MDBCol>
    </MDBRow>
    </MDBContainer>
  </div>

  );
  }
}

export default PrepareID;
