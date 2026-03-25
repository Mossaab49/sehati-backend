import pool from './config/db.js';
import connectDB from './config/mongodb.js';
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
});

//connect to database
app.get('/db', async (req, res) => {
    try {
        const result = await pool.query("SELECT current_user, current_database()");
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/mongodb', async (req, res) => {
    try {
        await connectDB();
        res.json({ message: 'MongoDB connected successfully' });
    } catch (error) {
        res.json({ error: error.message });
    }   
});


// Start the server

app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
    console.log(`http://localhost:${_PORT}`);
});
