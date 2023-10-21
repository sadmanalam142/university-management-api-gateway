import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';
import catchAsync from '../../../shared/catchAsync';

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.createOfferedCourse(req);
  sendResponse(res, result);
});

const getAllOfferedCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.getAllOfferedCourses(req);
  sendResponse(res, result);
});

const getSinglOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.getSinglOfferedCourse(req);
  sendResponse(res, result);
});

const updatOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.updatOfferedCourse(req);
  sendResponse(res, result);
});

const deleteOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseService.deleteOfferedCourse(req);
  sendResponse(res, result);
});

export const OfferedCourseController = {
  createOfferedCourse,
  getAllOfferedCourses,
  getSinglOfferedCourse,
  updatOfferedCourse,
  deleteOfferedCourse
};
