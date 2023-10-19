import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseClassScheduleService } from './offeredCourseClassSchedule.service';

const createOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await OfferedCourseClassScheduleService.createOfferedCourseClassSchedule(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

const getAllOfferedCourseClassSchedules = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getAllOfferedCourseClassSchedules(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.getSinglOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.updatOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseClassSchedule = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseClassScheduleService.deleteOfferedCourseClassSchedule(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseClassScheduleController = {
    createOfferedCourseClassSchedule,
    getAllOfferedCourseClassSchedules,
    getSinglOfferedCourseClassSchedule,
    updatOfferedCourseClassSchedule,
    deleteOfferedCourseClassSchedule
};