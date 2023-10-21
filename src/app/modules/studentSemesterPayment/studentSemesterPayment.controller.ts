import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { StudentSemesterPaymentService } from './studentSemesterPayment.service';
import catchAsync from '../../../shared/catchAsync';

const getMyPayment = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentSemesterPaymentService.getMyPayment(req);
  sendResponse(res, result);
});

export const StudentSemesterPaymentController = {
  getMyPayment
};
