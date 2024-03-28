import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext.js';




const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setLoginStatus } = useAuth();

    function SignUpButton() {
        function handleClick() {
            navigate('/register');
        }
        return (
            <button variant="primary" onClick={handleClick}>Sign up</button>
        );
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = {
            email: email,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(`${response} test for response fetch`);
            if (!response.ok) {
                throw new Error(`Failed to register. Status: ${response.status}`);
            }
            const data = await response.json();
            localStorage.setItem('token', data.token);
            console.log("success" + data);
            console.log('Registration successful');
            setLoginStatus(true);
            navigate('/');
        } catch (error) {
            console.error('Registration failed:', error.message);
        }
    };

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">Login</Button>
            <p>Don't have an account yet?</p>
            <SignUpButton />
        </Form >

    );
};

const Login = () => {
    return (
        <div>
            <LoginForm />
        </div>
    )
}

export default Login;
