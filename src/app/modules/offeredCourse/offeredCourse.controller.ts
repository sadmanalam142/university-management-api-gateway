import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseService } from './offeredCourse.service';

const createOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await OfferedCourseService.createOfferedCourse(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

const getAllOfferedCourses = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getAllOfferedCourses(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.getSinglOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.updatOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseService.deleteOfferedCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseController = {
    createOfferedCourse,
    getAllOfferedCourses,
    getSinglOfferedCourse,
    updatOfferedCourse,
    deleteOfferedCourse,
};