import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentService } from './student.service';
import catchAsync from '../../../shared/catchAsync';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getAllStudents(req);
  sendResponse(res, result);
});

const getSingleStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getSingleStudent(req);
  sendResponse(res, result);
});

const updateStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.updateStudent(req);
  sendResponse(res, result);
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.deleteStudent(req);
  sendResponse(res, result);
});

const getMyCourses = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getMyCourses(req);
  sendResponse(res, result);
});

const getMyAcademicInfos = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getMyAcademicInfos(req);
  sendResponse(res, result);
});

const getMyCourseSchedules = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentService.getMyCourseSchedules(req);
  sendResponse(res, result);
});

export const StudentController = {
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
  getMyCourses,
  getMyCourseSchedules,
  getMyAcademicInfos
};
