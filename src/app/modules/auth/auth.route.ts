import express from 'express';
import { AuthenticationController } from './auth.controller';

const router = express.Router();

router.post(
  '/login',
  AuthenticationController.loginUser
);
router.post(
  '/refresh-token',
  AuthenticationController.refreshToken
);

router.post(
  '/change-password',
  AuthenticationController.changePassword
);

export const AuthRoutes = { router };
