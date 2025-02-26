import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import animalRoutes from './routes/animalRoutes.js';
import rescueRoutes from './routes/rescueRoutes.js';

// Middleware
dotenv.config();
const app = express();

app.use(cors());

// Body parsing middleware
app.use(express.json());       // Parses JSON data
app.use(express.urlencoded({ extended: true })); // Parses url-encoded data

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/animals', animalRoutes);
app.use('/api/rescue', rescueRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to Calgary-Hack Server!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));