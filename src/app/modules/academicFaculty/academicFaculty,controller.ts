import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';
import catchAsync from '../../../shared/catchAsync';

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.createFaculty(req);
    sendResponse(res, result);
});

const getAllFaculties = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getAllFaculties(req);
    sendResponse(res, result);
});

const getSingleFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getSingleFaculty(req);
    sendResponse(res, result);
});

const updateFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.updateFaculty(req);
    sendResponse(res, result);
});

const deleteFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.deleteFaculty(req);
    sendResponse(res, result);
});


export const AcademicFacultyController = {
    createFaculty,
    getAllFaculties,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty,
};