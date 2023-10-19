import express from 'express';
import { CourseController } from './course.controller';

const router = express.Router();

router.get('/', CourseController.getAllCourses);
router.get('/:id', CourseController.getSingleCourse);

router.post('/', CourseController.createCourse);

router.patch('/:id', CourseController.updateCourse);

router.delete('/:id', CourseController.deleteCourse);

export const CourseRoutes = { router };
