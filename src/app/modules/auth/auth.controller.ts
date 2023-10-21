import { NextFunction, Request, Response } from "express";
import { AuthenticationService } from "./auth.service";
import sendResponse from "../../../shared/response";
import config from "../../../config";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";

const loginUser = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthenticationService.loginUser(req);

        const { refreshToken, ...others } = result.data;

        const cookieOptions = {
            secure: config.env === 'production',
            httpOnly: true,
        };

        res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "User loged in!",
            data: others
        });
  });

const refreshToken = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthenticationService.refreshToken(req);

        const { refreshToken, ...others } = result.data;

        const cookieOptions = {
            secure: config.env === 'production',
            httpOnly: true,
        };

        res.cookie('refreshToken', result.data.refreshToken, cookieOptions);
        sendResponse(res, {
            statusCode: httpStatus.OK,
            success: true,
            message: "New Refresh token generated!",
            data: others
        });
  });

const changePassword = catchAsync(async (req: Request, res: Response) => {
    const result = await AuthenticationService.changePassword(req);
        sendResponse(res, result)
  });

export const AuthenticationController = {
    loginUser,
    refreshToken,
    changePassword
}