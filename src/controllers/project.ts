import { Request, Response } from 'express';
import { Project } from '../schema';

export const getProjects = async (req: Request, res: Response) => {
  try {
    const projects = await Project.find();

    res.status(200).json({
      ok: true,
      projects,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const getProjectById = async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const project = await Project.findOne({ infobrasCode: id });

    if (!project) {
      return res.status(404).json({
        ok: false,
        msg: 'Proyecto no encontrado',
      });
    }

    res.status(200).json({
      ok: true,
      project,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};

export const createProject = async (req: Request, res: Response) => {
  const project = new Project(req.body);

  try {
    const projectDb = await project.save();

    res.status(201).json({
      ok: true,
      project: projectDb,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor hable con el administrador',
    });
  }
};
