import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';

const router = express.Router();

router.get('/', OfferedCourseClassScheduleController.getAllOfferedCourseClassSchedules);
router.get('/:id', OfferedCourseClassScheduleController.getSinglOfferedCourseClassSchedule);

router.post(
  '/',
  OfferedCourseClassScheduleController.createOfferedCourseClassSchedule
);

router.patch(
  '/:id',
  OfferedCourseClassScheduleController.updatOfferedCourseClassSchedule
);

router.delete(
  '/:id',
  OfferedCourseClassScheduleController.deleteOfferedCourseClassSchedule
);

export const OfferedCourseClassScheduleRoutes = {router};