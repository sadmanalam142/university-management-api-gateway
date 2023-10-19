import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from './academicFaculty.service';

const createFaculty = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await AcademicFacultyService.createFaculty(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

const getAllFaculties = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFaculties(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getSingleFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.updateFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteFaculty = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.deleteFaculty(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

export const AcademicFacultyController = {
    createFaculty,
    getAllFaculties,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty,
};