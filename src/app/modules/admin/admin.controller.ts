import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AdminService } from './admin.service';
import catchAsync from '../../../shared/catchAsync';

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.getAllFromDB(req);
        sendResponse(res, result);
  });

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.getByIdFromDB(req);
        sendResponse(res, result);
  });

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.updateOneInDB(req);
        sendResponse(res, result);
  });

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminService.deleteByIdFromDB(req);
        sendResponse(res, result);
  });

export const AdminController = {
    getAllFromDB,
    getByIdFromDB,
    updateOneInDB,
    deleteByIdFromDB
};
