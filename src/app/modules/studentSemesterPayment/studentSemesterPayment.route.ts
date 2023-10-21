import express from 'express';
import { StudentSemesterPaymentController } from './studentSemesterPayment.controller';

const router = express.Router();

router.get('/my-semester-payment', StudentSemesterPaymentController.getMyPayment);

export const StudentSemesterPaymentRoutes = { router };
