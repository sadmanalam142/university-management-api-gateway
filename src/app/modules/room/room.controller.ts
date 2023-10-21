import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { RoomService } from './room.service';
import catchAsync from '../../../shared/catchAsync';

const createRoom = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.createRoom(req);
  sendResponse(res, result);
});

const getAllRooms = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getAllRooms(req);
  sendResponse(res, result);
});

const getSingleRoom = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.getSingleRoom(req);
  sendResponse(res, result);
});

const updateRoom = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.updateRoom(req);
  sendResponse(res, result);
});

const deleteRoom = catchAsync(async (req: Request, res: Response) => {
  const result = await RoomService.deleteRoom(req);
  sendResponse(res, result);
});

export const RoomController = {
  createRoom,
  getAllRooms,
  getSingleRoom,
  updateRoom,
  deleteRoom
};
