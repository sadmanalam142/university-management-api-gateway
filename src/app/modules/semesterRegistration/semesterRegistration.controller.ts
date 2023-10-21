import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SemesterRegistrationService } from './semesterRegistration.service';
import catchAsync from '../../../shared/catchAsync';

const createSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.createSemesterRegistration(req);
  sendResponse(res, result);
});

const getAllSemesterRegistrations = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getAllSemesterRegistrations(req);
  sendResponse(res, result);
});

const getSingleSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getSingleSemesterRegistration(req);
  sendResponse(res, result);
});

const updateSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.updateSemesterRegistration(req);
  sendResponse(res, result);
});

const deleteSemesterRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.deleteSemesterRegistration(req);
  sendResponse(res, result);
});

const createStartRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.createStartRegistration(req);
  sendResponse(res, result);
});

const enrollIntoCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.enrollIntoCourse(req);
  sendResponse(res, result);
});

const withdrawFromCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.withdrawFromCourse(req);
  sendResponse(res, result);
});

const confirmRegistration = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.confirmRegistration(req);
  sendResponse(res, result);
});

const getRegistrations = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getRegistrations(req);
  sendResponse(res, result);
});

const startNewSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.startNewSemester(req);
  sendResponse(res, result);
});

const getMySemesterRegCouses = catchAsync(async (req: Request, res: Response) => {
  const result = await SemesterRegistrationService.getMySemesterRegCouses(req);
  sendResponse(res, result);
});

export const SemesterRegistrationController = {
  createSemesterRegistration,
  getAllSemesterRegistrations,
  getSingleSemesterRegistration,
  updateSemesterRegistration,
  deleteSemesterRegistration,
  createStartRegistration,
  enrollIntoCourse,
  withdrawFromCourse,
  confirmRegistration,
  getRegistrations,
  startNewSemester,
  getMySemesterRegCouses
};
