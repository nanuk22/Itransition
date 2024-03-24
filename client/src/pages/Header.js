import React, { useState } from 'react';
import { Navbar, Nav, Form, Container, Stack, Carousel, CarouselItem, CarouselCaption, Col, Row, Dropdown, DropdownMenu } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './Register.js';
import { Link, useNavigate } from 'react-router-dom';
import LoginLogout from './IsLoginFuction.js';




function UserMenu() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                User Menu
            </Dropdown.Toggle>
            <DropdownMenu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">My Collections</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
            </DropdownMenu>
        </Dropdown>
    )
}


function LoginButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/login');
    }

    return (
        <button onClick={handleClick}>Login</button>
    );
}

function LoginOrProfileButton() {
    
    console.log(LoginLogout());
    return (
        <div>
        
            {LoginLogout() ? <UserMenu /> : <LoginButton />}
        
        </div> 
    );
}


function SideBarButton() {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Categories
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Cards</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Coins</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Books</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Arts</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Cars</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}



function Search() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="search">
                <Form.Label>search</Form.Label>
                <Form.Control type="text" placeholder="search" />
            </Form.Group>
        </Form>
    );
}

function Header() {
    console.log("home f")
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">MyCollection</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <SideBarButton />
                    <LoginOrProfileButton />
                </Nav>
            </Navbar.Collapse>
            <Search />
        </Navbar>

    );
};

export default Header;
