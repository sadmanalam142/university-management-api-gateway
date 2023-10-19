import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/response";
import { AcademicSemesterService } from "./academicSemester.service";

const createSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.createSemester(req);
  
    sendResponse(res, result);
  });

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getAllSemesters(req);
  
    sendResponse(res, result);
  });

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.getSingleSemester(req);
  
    sendResponse(res, result);
  });

const updateSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.updateSemester(req);
  
    sendResponse(res, result);
  });

const deleteSemester = catchAsync(async (req: Request, res: Response) => {
    const result = await AcademicSemesterService.deleteSemester(req);
  
    sendResponse(res, result);
  });

  export const AcademicSemesterController = {
    createSemester,
    getAllSemesters,
    getSingleSemester,
    updateSemester,
    deleteSemester
  }