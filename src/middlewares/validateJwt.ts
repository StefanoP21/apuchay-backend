import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

export const validateJwt = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.header('x-token') as string;

  if (!token) {
    return res.status(401).json({
      ok: false,
      msg: 'No hay token en la petición',
    });
  }

  try {
    const secretKey: Secret = process.env.SECRET_JWT_SEED as Secret;

    const { uid, name } = jwt.verify(token!, secretKey) as JwtPayload;

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
