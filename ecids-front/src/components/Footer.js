import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';
import '../index.css';

const Footer = () => {
    return (
        <MDBFooter color="blue"

        id= "page-footer"
       
          className="text-center font-small darken-2">
            
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
        </MDBFooter>
    );
}
export default Footer;