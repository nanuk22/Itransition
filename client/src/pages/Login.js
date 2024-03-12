import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Register from './Register';


const Login = () => {
    console.log("piu");
    return (

        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="#home">MyCollection</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">

                    <Link to="/register" className="nav-link">
                        Register
                    </Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default Login;
