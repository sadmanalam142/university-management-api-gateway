import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { OfferedCourseSectionService } from './offeredCourseSection.service';
import catchAsync from '../../../shared/catchAsync';

const createOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.createOfferedCourseSection(req);
  sendResponse(res, result);
});

const getAllOfferedCourseSections = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.getAllOfferedCourseSections(req);
  sendResponse(res, result);
});

const getSinglOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.getSinglOfferedCourseSection(req);
  sendResponse(res, result);
});

const updatOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.updatOfferedCourseSection(req);
  sendResponse(res, result);
});

const deleteOfferedCourseSection = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseSectionService.deleteOfferedCourseSection(req);
  sendResponse(res, result);
});

export const OfferedCourseSectionController = {
  createOfferedCourseSection,
  getAllOfferedCourseSections,
  getSinglOfferedCourseSection,
  updatOfferedCourseSection,
  deleteOfferedCourseSection
};
