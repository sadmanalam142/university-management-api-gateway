import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseMarkService } from './studentEnrollrdCourseMark.service';
import catchAsync from '../../../shared/catchAsync';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.getAllFromDB(req);
  sendResponse(res, result);
});

const getStudentMarks = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.getStudentMarks(req);
  sendResponse(res, result);
});

const updateMarks = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.updateMarks(req);
  sendResponse(res, result);
});

const updateCourseFinalMarks = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseMarkService.updateCourseFinalMarks(req);
  sendResponse(res, result);
});

export const StudentEnrolledCourseMarkController = {
  getAllFromDB,
  updateMarks,
  updateCourseFinalMarks,
  getStudentMarks
};
