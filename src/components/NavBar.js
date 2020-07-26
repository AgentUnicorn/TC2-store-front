import React from 'react'
import '../index'
import {Navbar, Nav, Button} from 'react-bootstrap'
import LogoWhite from '../Images/Logo.png'
import LogoBlack from '../Images/Logo-black.png'


const NavBar = () => {
    return (
      <div>
        <Navbar collapseOnSelect className="m-0" expand="lg" fixed="top" bg="dark" variant="dark">

            {/* Logo Section  */}
          <Navbar.Brand href="#home" id="surround" className="navLogo navLogoAfter">
              <span id="initial">
                <img
                  src={LogoWhite}
                  width="118"
                  height="34"
                  className="d-inline-block align-top"
                  alt="TC2 logo"
                />
              </span>
              <span id="onhover">
                <img
                  src={LogoBlack}
                  width="118"
                  height="34"
                  className="d-inline-block align-top logo-top"
                  alt="TC2 logo black"
                />
              </span>
          </Navbar.Brand>

          {/* Middle Section */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto header">
            <Nav.Link className="navLink mr-2" href="/"><p>HOME PAGE</p></Nav.Link>
            <Nav.Link className="navLink mr-2" href="/video"><p>YOUTUBE VIDEO</p></Nav.Link>
            <Nav.Link className="navLink mr-2" href="/add"><p>CREATE CAR</p></Nav.Link>
          </Nav>

          {/* Input Section */}
          <Button className="mr-2" variant="success">Sign In</Button>
          <Button variant="primary">Sign Up</Button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default NavBar
