import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentEnrolledCourseService } from './studentEnrolledCourse.service';
import catchAsync from '../../../shared/catchAsync';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.getAllFromDB(req);
  sendResponse(res, result);
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.getByIdFromDB(req);
  sendResponse(res, result);
});

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.insertIntoDB(req);
  sendResponse(res, result);
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.updateOneInDB(req);
  sendResponse(res, result);
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentEnrolledCourseService.deleteByIdFromDB(req);
  sendResponse(res, result);
});

export const StudentEnrolledCourseController = {
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  insertIntoDB
};
