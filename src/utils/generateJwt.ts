import jwt from 'jsonwebtoken';

export const generateJwt = (uid: string, name: string) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    const secret = process.env.SECRET_JWT_SEED;

    if (!secret) {
      throw new Error('No se ha definido un secret para el JWT');
    }

    jwt.sign(
      payload,
      secret,
      {
        expiresIn: '2h',
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('No se pudo generar el token');
        }

        resolve(token);
      }
    );
  });
};
