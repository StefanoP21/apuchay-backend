import { Router } from 'express';
import { createUser, loginUser, renewToken } from '../controllers';
import { validateJwt, validateFields } from '../middlewares';

export const authRouter = Router();

authRouter.post('/register', validateFields, createUser);

authRouter.post('/login', validateFields, loginUser);

authRouter.get('/renew', validateJwt, renewToken);
