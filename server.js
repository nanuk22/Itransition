const bodyParser = require('body-parser');
import express, { json } from "express";
const jwt = require('jsonwebtoken');
const path = require('path');
import { Pool } from 'pg';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json());

const db = new Pool({
    user: 'mycollectiondb_user',
    password: 'RKY1SSmLUCjAfZUvlfuiashnijzmWLR7',
    host: 'dpg-cnmsfnv109ks73fudd3g-a',
    database: 'mycollectiondb',
    port: 5432,
});

app.use(express.static(path.join(process.cwd(), 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'client', 'build', 'index.html'));
});


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        
        const result = await db.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)',
            [name, email, password]
        );

        
        res.json({ success: true, message: 'Registration successful' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
