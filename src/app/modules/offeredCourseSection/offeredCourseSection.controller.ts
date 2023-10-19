import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseSectionService } from './offeredCourseSection.service';

const createOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await OfferedCourseSectionService.createOfferedCourseSection(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

const getAllOfferedCourseSections = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getAllOfferedCourseSections(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSinglOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.getSinglOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updatOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.updatOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteOfferedCourseSection = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await OfferedCourseSectionService.deleteOfferedCourseSection(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const OfferedCourseSectionController = {
    createOfferedCourseSection,
    getAllOfferedCourseSections,
    getSinglOfferedCourseSection,
    updatOfferedCourseSection,
    deleteOfferedCourseSection,
};