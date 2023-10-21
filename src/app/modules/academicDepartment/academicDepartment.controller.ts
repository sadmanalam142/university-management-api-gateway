import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';
import catchAsync from '../../../shared/catchAsync';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.createDepartment(req);
    sendResponse(res, result);
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getAllDepartments(req);
    sendResponse(res, result);
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getSingleDepartment(req);
    sendResponse(res, result);
});

const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.updateDepartment(req);
    sendResponse(res, result);
});

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.deleteDepartment(req);
    sendResponse(res, result);
});

export const AcademicDepartmentController = {
    createDepartment,
    getAllDepartments,
    getSingleDepartment,
    updateDepartment,
    deleteDepartment,
};