import { Router } from 'express';
import { createUser } from 'src/controller';

export const router = Router();

router.post('/register', [], createUser);

router.post('/login', []);

router.get('/renew', []);
