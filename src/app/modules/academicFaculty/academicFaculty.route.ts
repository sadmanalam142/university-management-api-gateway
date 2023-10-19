import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { AcademicFacultyController } from './academicFaculty,controller';

const router = express.Router();

router.get('/', AcademicFacultyController.getAllFaculties);
router.get('/:id', AcademicFacultyController.getSingleFaculty);

router.post('/', AcademicFacultyController.createFaculty);

router.patch('/:id', AcademicFacultyController.updateFaculty);

router.delete('/:id', AcademicFacultyController.deleteFaculty);

export const AcademicFacultyRoutes = {
  router
};
