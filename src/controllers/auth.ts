import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../schema';
import { UserFields } from '../interfaces';
import { generateJwt } from '../utils';

declare module 'express-serve-static-core' {
  interface Request {
    uid: string;
    name: string;
  }
}

export const createUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as UserFields;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'El correo ya está registrado',
      });
    }

    user = new User(req.body);

    //* Encrypt Password
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    //* Generate JWT
    const token = (await generateJwt(user.id, user.name)) as string;

    res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body as UserFields;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe un usuario con ese correo',
      });
    }

    //* Confirm passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Contraseña incorrecta',
      });
    }

    //* Generate JWT
    const token = (await generateJwt(user.id, user.name)) as string;

    res.status(200).json({
      ok: true,
      uid: user.id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const renewToken = async (req: Request, res: Response) => {
  const { uid, name } = req;

  //* Generate JWT
  const token = (await generateJwt(uid, name)) as string;

  res.json({
    ok: true,
    uid,
    name,
    token,
  });
};
