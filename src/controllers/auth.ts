import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User } from '../schema';
import { IUser } from '../interfaces';
import { generateJwt } from '../utils';

export const createUser = async (req: Request, res: Response) => {
  const { email, password }: IUser = req.body;

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
    const token = await generateJwt(user.id, user.name);

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
