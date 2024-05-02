import { Request, Response } from 'express';
import { Course } from '../schema';

export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await Course.find();

    res.status(200).json({
      ok: true,
      courses,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const getCourseById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const course = await Course.findOne({ courseCode: id });

    if (!course) {
      return res.status(404).json({
        ok: false,
        msg: 'Proyecto no encontrado',
      });
    }

    res.status(200).json({
      ok: true,
      course,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const createCourse = async (req: Request, res: Response) => {
  const { courseCode } = req.body;

  try {
    let course = await Course.findOne({ courseCode });

    if (course) {
      return res.status(400).json({
        ok: false,
        msg: 'Ya existe un curso con ese código',
      });
    }

    course = new Course(req.body);

    await course.save();

    res.status(201).json({
      ok: true,
      uid: course.id,
      name: course.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};
