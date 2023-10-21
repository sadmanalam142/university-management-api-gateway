import { NextFunction, Request, Response } from 'express';
import { FacultyService } from './faculty.service';
import sendResponse from '../../../shared/response';
import catchAsync from '../../../shared/catchAsync';

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getAllFaculties(req);
  sendResponse(res, result);
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getSingleFaculty(req);
  sendResponse(res, result);
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.updateFaculty(req);
  sendResponse(res, result);
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.deleteFaculty(req);
  sendResponse(res, result);
});

const getMyCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getMyCourses(req);
  sendResponse(res, result);
});

const getMyCourseStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await FacultyService.getMyCourseStudents(req);
  sendResponse(res, result);
});

export const FacultyController = {
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
  deleteFaculty,
  getMyCourses,
  getMyCourseStudents
};
