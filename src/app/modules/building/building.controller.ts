import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.service';
import catchAsync from '../../../shared/catchAsync';

const createBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.createBuilding(req);
    sendResponse(res, result);
});

const getAllBuildings = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getAllBuildings(req);
    sendResponse(res, result);
});

const getSingleBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getSingleBuilding(req);
    sendResponse(res, result);
});

const updateBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.updateBuilding(req);
    sendResponse(res, result);
});

const deleteBuilding = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.deleteBuilding(req);
    sendResponse(res, result);
});

export const BuildingController = {
    createBuilding,
    getAllBuildings,
    getSingleBuilding,
    updateBuilding,
    deleteBuilding,
};