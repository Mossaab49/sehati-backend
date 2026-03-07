const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const _PORT = process.env.PORT || 3000;
// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Connect to MongoDB
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@sehati.hx4mwkg.mongodb.net/`);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Start the server

app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
});
