import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { StudentController } from './student.controller';

const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/my-courses', StudentController.getMyCourses);
router.get('/my-academic-infos', StudentController.getMyAcademicInfos);
router.get('/my-course-schedules', StudentController.getMyCourseSchedules);
router.get('/:id', StudentController.getSingleStudent);

router.patch('/:id', StudentController.updateStudent);

router.delete('/:id', StudentController.deleteStudent);

export const StudentRoutes = {router};
