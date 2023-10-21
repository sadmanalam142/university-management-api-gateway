import express from 'express';
import { ManagementDepartmentController } from './managementDepartment.controller';

const router = express.Router();

router.get('/', ManagementDepartmentController.getAllManagementDepartments);
router.get('/:id', ManagementDepartmentController.getSingleManagementDepartment);

router.post(
  '/',
  ManagementDepartmentController.createManagementDepartment
);

router.patch(
  '/:id',
  ManagementDepartmentController.updateManagementDepartment
);

router.delete(
  '/:id',
  ManagementDepartmentController.deleteManagementDepartment
);

export const ManagementDepartmentRoutes = {router};