import { Router } from 'express';
import { createProject, getProjectById, getProjects } from '../controllers';

export const projectRouter = Router();

projectRouter.get('/', getProjects);

projectRouter.get('/:id', getProjectById);

projectRouter.post('/new', createProject);
