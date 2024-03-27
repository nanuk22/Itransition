const express = require('express');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

require('@babel/register')({
    presets: ['@babel/preset-env']
});

const secretKey = crypto.randomBytes(32).toString('hex');
console.log('Generated secret key:', secretKey);

const app = express();

const port = process.env.PORT || 3001;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false
    }
});

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    console.log('Received registration request 000:', req.body);
    const { username, email, password } = req.body;
    console.log(email);
    if (!username || !email || !password) {
        console.log("no data")
        return res.status(400).json({ error: 'Username, email, and password are required' });
    }

    const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    console.log(existingUser);
    if (existingUser.rows.length > 0) {
        console.log("user exists");
        return res.status(409).json({ error: 'Email already registered' });
    }
    try {
        const client = await pool.connect();
        await client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
        client.release();
        console.log("success")
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    try {
        const user = await pool.query('SELECT * FROM users WHERE email = $1', [email]);

        if (user.rows.length === 0) {
            console.log("Invalid email or password");
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const dbPassword = user.rows[0].password;
        if (password !== dbPassword) {
            console.log("Invalid email or password", password, dbPassword);
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const userId = user.rows[0].id;
        console.log('id', userId)
        const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
        console.log('token ', token );
        res.status(200).json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/test', async (req, res) => {
    try {
        const client = await pool.connect();
        res.send('Database connection successful!');
        client.release();
    } catch (error) {
        console.error('Error connecting to the database', error);
        res.status(500).send('Internal server error');
    }
});

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
// });

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(express.static(path.join(__dirname, 'client', 'public')));


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
