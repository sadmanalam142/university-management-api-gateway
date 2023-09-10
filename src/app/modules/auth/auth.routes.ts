import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { AuthController } from './auth.controller';
import { AuthValidation } from './auth.validations';

const router = express.Router();

router.post('/login', validateRequest(AuthValidation.loginUser), AuthController.loginUser);
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshToken),
  AuthController.refreshToken
);

router.post(
  '/change-password',
  auth(
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.FACULTY,
    ENUM_USER_ROLE.STUDENT
  ),
  validateRequest(AuthValidation.changePassword),
  AuthController.changePassword
);

router.post(
  '/forgot-password',
  validateRequest(AuthValidation.forgotPassword),
  AuthController.forgotPassword
);

router.post(
  '/reset-password',
  validateRequest(AuthValidation.resetPassword),
  AuthController.resetPassword
);

export const authRoutes = router;
