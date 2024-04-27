import { Router } from 'express';
import { createUser } from '../controllers';

export const authRouter = Router();

authRouter.post('/register', createUser);

// authRouter.post('/login');

// authRouter.get('/renew');
