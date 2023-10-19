import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

router.get(
  '/my-registration',
  SemesterRegistrationController.getRegistrations
);

router.get(
  '/my-semester-registration-courses',
  SemesterRegistrationController.getMySemesterRegCouses
);

router.get('/:id', SemesterRegistrationController.getSingleSemesterRegistration);

router.post(
  '/',
  SemesterRegistrationController.createSemesterRegistration
);

router.post(
  '/enroll-into-course',
  SemesterRegistrationController.enrollIntoCourse
);

router.post(
  '/withdraw-from-course',
  SemesterRegistrationController.withdrawFromCourse
);

router.post(
  '/confirm-registration',
  SemesterRegistrationController.confirmRegistration
);

router.post(
  '/start-registration',
  SemesterRegistrationController.createStartRegistration
);

router.post(
  '/:id/start-new-semester',
  SemesterRegistrationController.startNewSemester
);

router.patch(
  '/:id',
  SemesterRegistrationController.updateSemesterRegistration
);

router.delete(
  '/:id',
  SemesterRegistrationController.updateSemesterRegistration
);

export const SemesterRegistrationRoutes = {router};