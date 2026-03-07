import pkg from 'pg';

const { Pool } = pkg;
const express = require('express');
require('dotenv').config();


const app = express();
const _PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
    res.send('Hello, World!');
});

// Database connection
const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

// Start the server

app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
});



export default pool;