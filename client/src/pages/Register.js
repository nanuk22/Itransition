import React, { useState, useMemo } from 'react';
import { Button, Form, Navbar } from 'react-bootstrap';
import Header from './Header.js';
import Main from './Home.js';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function RegistrationForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        console.log('test');
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(`Failed to register. Status: ${response.status}. Error: ${data.error}`);
            }
            console.log('Registration successful');
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>


    );




};

const Register = () => {

    return (
        <div>

            <RegistrationForm />

        </div>
    )
}


export default Register;
