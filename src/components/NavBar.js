import React from 'react'
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'

const NavBar = () => {
    return (
        <div>
            <Navbar bg="white" variant="white">
                <Navbar.Brand href="#home">
                    <img src="./logogroup3.png" height="50px"/>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Create your experience</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar
