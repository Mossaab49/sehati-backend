// -------------------------------------------------------
//                       import modules 
// -------------------------------------------------------
import pool from './config/db.js';
import connectDB from './config/mongodb.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';


// -------------------------------------------------------
//                       import routes
// -------------------------------------------------------
import doctorRoutes from './modules/Doctor/Routes/Doctor.routes.js';



// -------------------------------------------------------
// Initialize Express app and load environment variables
// -------------------------------------------------------

dotenv.config();
const app = express();
const _PORT = process.env.PORT || 3000;


// -------------------------------------------------------
//                          Middleware
// -------------------------------------------------------

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));



// --------------------------------------------------------
//                        Routes globales
// --------------------------------------------------------

app.get('/', (req, res) => {
    res.json({ status: 'API en ligne' });
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

// --------------------------------------------------------
//                        Routes spécifiques
// --------------------------------------------------------

app.use('/api/doctors', doctorRoutes);




// --------------------------------------------------------
//                     Error handling
// --------------------------------------------------------

app.use((err, req, res, next) => {
    console.error(`[${req.method}] ${req.url} →`, err.message);
    if (err.code === 'P2025') return res.status(404).json({ message: 'Not found' });
    if (err.code === 'P2002') return res.status(409).json({ message: 'Value already exists' });
    res.status(err.status || 500).json({
        message: err.message || 'Internal server error'
    });
});


// --------------------------------------------------------
//                     Start the server
// ---------------------------------------------------------
app.listen(_PORT, () => {
    console.log(`Server is running on port ${_PORT}`);
    console.log(`http://localhost:${_PORT}`);
});