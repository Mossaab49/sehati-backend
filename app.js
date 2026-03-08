import pool from './config/db.js';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
const _PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
    res.send('Hello, World!');
});


app.get('/db', async (req, res) => {
    try {
        const result = await pool.query("SELECT current_user, current_database()");
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// Start the server

app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
});
