import express from 'express';
import { OfferedCourseController } from './offeredCourse.controller';

const router = express.Router();

router.get('/', OfferedCourseController.getAllOfferedCourses);
router.get('/:id', OfferedCourseController.getSinglOfferedCourse);

router.post(
  '/',
  OfferedCourseController.createOfferedCourse
);

router.patch(
  '/:id',
  OfferedCourseController.updatOfferedCourse
);

router.delete(
  '/:id',
  OfferedCourseController.deleteOfferedCourse
);

export const OfferedCourseRoutes = {router};