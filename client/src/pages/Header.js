import React, { useContext, useEffect, useState } from 'react';
import { Navbar, Nav, Form, Container, Stack, Carousel, CarouselItem, CarouselCaption, Col, Row, Dropdown, DropdownMenu } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext, useAuth } from '../AuthContext.js';
import { jwtDecode } from 'jwt-decode';



function UserMenu() {
    const navigate = useNavigate();
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            console.log('decodedToken ', decodedToken)
            const { userId } = decodedToken;
            setUserId(userId);
        }
    }, []);

    function redirectToProfile() {
        if (userId) {
            navigate(`/user/profile/${userId}`);
        } else {
            console.error('User ID not available');
        }
    }

    function redirectToCreateCollection() {
        if (userId) {
            navigate(`/user/create/${userId}`);
        } else {
            console.error('User ID not available');
        }
    }

    function redirectToMyCollections() {
        if (userId) {
            navigate(`/user/collections/${userId}`);
        } else {
            console.error('User ID not available');
        }
    }

    const { setLoginStatus } = useAuth();
    function handleLogout() {
        setLoginStatus(false);
        navigate('/');
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                User Menu
            </Dropdown.Toggle>
            <DropdownMenu>
                <Dropdown.Item onClick={redirectToProfile}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={redirectToCreateCollection}>Create new collection</Dropdown.Item>
                <Dropdown.Item onClick={redirectToMyCollections}>My Collections</Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>Log Out</Dropdown.Item>
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
    const { isLogin } = useContext(AuthContext);
    return (
        <div>
            {isLogin ? <UserMenu /> : <LoginButton />}
        </div>
    );
}

//this will render with map real categories from categories.js
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
    const navigate = useNavigate();
    function handleToHomePage() {
        navigate('/');
    }
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand onClick={handleToHomePage}>MyCollection</Navbar.Brand>
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
