import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { SemesterRegistrationService } from './semesterRegistration.service';

const createSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await SemesterRegistrationService.createSemesterRegistration(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

const getAllSemesterRegistrations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getAllSemesterRegistrations(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getSingleSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.getSingleSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const updateSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.updateSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const deleteSemesterRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.deleteSemesterRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const createStartRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.createStartRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const enrollIntoCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.enrollIntoCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const withdrawFromCourse = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.withdrawFromCourse(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const confirmRegistration = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.confirmRegistration(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getRegistrations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await SemesterRegistrationService.getRegistrations(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };

const startNewSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterRegistrationService.startNewSemester(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getMySemesterRegCouses = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await SemesterRegistrationService.getMySemesterRegCouses(req);
      sendResponse(res, result);
    } catch (error) {
      next(error);
    }
  };
  

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
