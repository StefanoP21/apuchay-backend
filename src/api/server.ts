import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// configures dotenv to work in your application
dotenv.config();

// Express Server
const app = express();

// Port
const port = process.env.PORT ?? 3000;

// CORS
app.use(cors());

// Public Folder
app.use(express.static('public'));

// Read and Parse JSON
app.use(express.json());

// Routes

// Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} 🚀`);
});
