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

app.get('/', (request: Request, response: Response) => {
  response.status(200).send('Hello World');
});

app
  .listen(port, () => {
    console.log(`Server running at: http://localhost:${port}`);
  })
  .on('error', (error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
