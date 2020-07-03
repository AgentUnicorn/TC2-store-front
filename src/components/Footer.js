import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
        <MDBCol md="4">
            <h5 className="title">Host</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">How AirBNB work</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Diversity & Belonging</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Against Discrimination</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Accessibility</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Host</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Host your home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Host an online experience</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Open Homes</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Resource Center</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="4">
            <h5 className="title">Support</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Updates for COVID-19</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Help Cnter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Cancellation options</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Neighborhood Support</a>
              </li>
            </ul>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
      </div>
    </MDBFooter>
  );
}

export default FooterPage;