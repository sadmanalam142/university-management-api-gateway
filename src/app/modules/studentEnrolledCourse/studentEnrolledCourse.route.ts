import express from 'express';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseController.getAllFromDB);
router.get('/:id', StudentEnrolledCourseController.getByIdFromDB);

router.post('/', StudentEnrolledCourseController.insertIntoDB);

router.patch('/:id', StudentEnrolledCourseController.updateOneInDB);

router.delete('/:id', StudentEnrolledCourseController.deleteByIdFromDB);

export const StudentEnrolledCourseRoutes = { router };
