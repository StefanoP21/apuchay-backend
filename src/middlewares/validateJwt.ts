import { NextFunction, Response } from 'express';
import jwt from 'jsonwebtoken';
import { IRequestToken } from 'src/interfaces';

const validateJwt = (req: IRequestToken, res: Response, next: NextFunction) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición',
    });
  }

  try {
    const secret = process.env.SECRET_JWT_SEED;

    if (!secret) {
      throw new Error('No se ha definido un seed para el JWT');
    }

    const { uid, name } = jwt.verify(token, secret) as IRequestToken;

    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: 'Token no válido',
    });
  }

  next();
};
