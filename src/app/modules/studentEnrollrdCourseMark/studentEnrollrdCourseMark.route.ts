import express from 'express';
import { StudentEnrolledCourseMarkController } from './studentEnrollrdCourseMark.controller';

const router = express.Router();

router.get('/', StudentEnrolledCourseMarkController.getAllFromDB);
router.get('/my-marks', StudentEnrolledCourseMarkController.getStudentMarks);

router.post(
  '/update-marks',
  StudentEnrolledCourseMarkController.updateMarks
);

router.post(
  '/update-course-final-marks',
  StudentEnrolledCourseMarkController.updateCourseFinalMarks
);

export const StudentEnrolledCourseMarkRoutes = { router };
