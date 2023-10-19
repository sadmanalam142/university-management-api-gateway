import express from 'express';
import { OfferedCourseSectionController } from './offeredCourseSection.controller';

const router = express.Router();

router.get('/', OfferedCourseSectionController.getAllOfferedCourseSections);
router.get('/:id', OfferedCourseSectionController.getSinglOfferedCourseSection);

router.post('/', OfferedCourseSectionController.createOfferedCourseSection);

router.patch('/:id', OfferedCourseSectionController.updatOfferedCourseSection);

router.delete('/:id', OfferedCourseSectionController.deleteOfferedCourseSection);

export const OfferedCourseSectionRoutes = { router };
