import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from '../db';
import { authRouter, projectRouter } from '../routes';

// configures dotenv to work in your application
dotenv.config();

// Express Server
const app = express();

// Port
const port = process.env.PORT ?? 3000;

// Database
connectDB();

// CORS
app.use(cors());

// Public Folder
app.use(express.static('public'));

// Read and Parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/projects', projectRouter);

// Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🚀`);
});
