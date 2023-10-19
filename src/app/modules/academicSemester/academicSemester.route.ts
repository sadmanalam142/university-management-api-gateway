import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router = express.Router();
router.get('/', AcademicSemesterController.getAllSemesters);
router.get('/:id', AcademicSemesterController.createSemester);
router.post('/', AcademicSemesterController.createSemester);
router.patch('/:id', AcademicSemesterController.createSemester);
router.delete('/:id', AcademicSemesterController.createSemester);

export const AcademicSemesterRoutes = {
  router
};
