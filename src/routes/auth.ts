import { Router } from 'express';
import { check } from 'express-validator';
import { createUser, loginUser, renewToken } from '../controllers';
import { validateJwt, validateFields } from '../middlewares';

export const authRouter = Router();

authRouter.post(
  '/register',
  [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('lastname', 'El apellido es obligatorio').not().isEmpty(),
    check('email', 'El correo es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check(
      'password',
      'La contraseña debe tener al menos 6 caracteres'
    ).isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

authRouter.post(
  '/login',
  [
    check('email', 'El correo es obligatorio').not().isEmpty(),
    check('email', 'El correo no es válido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    check(
      'password',
      'La contraseña debe tener al menos 6 caracteres'
    ).isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);

authRouter.get('/renew', validateJwt, renewToken);
