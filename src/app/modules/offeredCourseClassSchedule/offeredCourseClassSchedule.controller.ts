import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';
import catchAsync from '../../../shared/catchAsync';

const createOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

const getAllOfferedCourseClassSchedules = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedules(req);
  sendResponse(res, result);
});

const getSinglOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.getSinglOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

const updatOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.updatOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

const deleteOfferedCourseClassSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(req);
  sendResponse(res, result);
});

export const OfferedCourseClassScheduleController = {
  createOfferedCourseClassSchedule,
  getAllOfferedCourseClassSchedules,
  getSinglOfferedCourseClassSchedule,
  updatOfferedCourseClassSchedule,
  deleteOfferedCourseClassSchedule
};
