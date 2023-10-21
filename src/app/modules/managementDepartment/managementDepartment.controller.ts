import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { ManagementDepartmentService } from './managementDepartment.service';
import catchAsync from '../../../shared/catchAsync';

const createManagementDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.createManagementDepartment(req);
  sendResponse(res, result);
});

const getAllManagementDepartments = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.getAllManagementDepartments(req);
  sendResponse(res, result);
});

const getSingleManagementDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.getSingleManagementDepartment(req);
  sendResponse(res, result);
});

const updateManagementDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.updateManagementDepartment(req);
  sendResponse(res, result);
});

const deleteManagementDepartment = catchAsync(async (req: Request, res: Response) => {
  const result = await ManagementDepartmentService.deleteManagementDepartment(req);
  sendResponse(res, result);
});

export const ManagementDepartmentController = {
  createManagementDepartment,
  getAllManagementDepartments,
  getSingleManagementDepartment,
  updateManagementDepartment,
  deleteManagementDepartment
};
