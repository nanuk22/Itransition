import React, { useState, useMemo } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';



const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (!response.ok) {
                throw new Error(`Failed to register. Status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Registration response:', data);
        } catch (error) {
            console.error('Registration error:', error.message);
        }
    };

return (
    
    <Form onSubmit={handleRegister}>
        <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter username"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formUseremail">
            <Form.Label>Email</Form.Label>
            <Form.Control
                type="text"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </Form.Group>

        <Button variant="primary" type="submit">
            Register
        </Button>
    </Form>
);



};

export default Register;
