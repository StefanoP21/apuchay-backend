import { Router } from 'express';
import { createUser, loginUser, renewToken } from '../controllers';

export const authRouter = Router();

authRouter.post('/register', createUser);

authRouter.post('/login', loginUser);

authRouter.get('/renew', renewToken);
