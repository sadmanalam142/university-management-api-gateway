import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.get('/', AcademicDepartmentController.getAllDepartments);
router.get('/:id', AcademicDepartmentController.getSingleDepartment);

router.post('/', AcademicDepartmentController.createDepartment);

router.patch('/:id', AcademicDepartmentController.updateDepartment);

router.delete('/:id', AcademicDepartmentController.deleteDepartment);

export const AcademicDepartmentRoutes = { router };
