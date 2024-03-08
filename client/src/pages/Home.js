import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">MyCollection</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#login">Login</Nav.Link>
                    <Link to="/Register" className="nav-link">
                        Register
                    </Link>
                    <Nav.Link href="#profile">Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Home;
