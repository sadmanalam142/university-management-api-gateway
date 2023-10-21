import { NextFunction, Request, Response } from 'express';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';
import catchAsync from '../../../shared/catchAsync';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createStudent(req);
  sendResponse(res, result);
});

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createFaculty(req);
  sendResponse(res, result);
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createAdmin(req);
  sendResponse(res, result);
});

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin
};
