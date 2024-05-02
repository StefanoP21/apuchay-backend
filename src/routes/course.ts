import { Router } from 'express';
import { createCourse, getCourseById, getCourses } from '../controllers';

export const courseRouter = Router();

courseRouter.get('/', getCourses);

courseRouter.get('/:id', getCourseById);

courseRouter.post('/new', createCourse);
