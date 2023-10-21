import express from 'express';
import { FacultyController } from './faculty.controller';

const router = express.Router();

router.get('/', FacultyController.getAllFaculties);

router.get('/my-courses', FacultyController.getMyCourses);
router.get('/my-course-students', FacultyController.getMyCourseStudents);

router.get('/:id', FacultyController.getSingleFaculty);

router.patch('/:id', FacultyController.updateFaculty);

router.delete('/:id', FacultyController.deleteFaculty);

export const FacultyRoutes = { router };
