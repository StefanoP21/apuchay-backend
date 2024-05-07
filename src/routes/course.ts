import { Router } from 'express';
import { createCourse, getCourseById, getCourses } from '../controllers';
import { validateJwt } from '../middlewares';

export const courseRouter = Router();

courseRouter.get('/', getCourses);

courseRouter.get('/:id', validateJwt, getCourseById);

courseRouter.post('/new', createCourse);
