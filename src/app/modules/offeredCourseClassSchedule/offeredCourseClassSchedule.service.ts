import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post(
      '/offered-course-class-schedules/create-schedule',
      req.body,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return response;
  };

const getAllOfferedCourseClassSchedules = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/offered-course-class-schedule', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSinglOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(
    `/offered-course-class-schedule/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const updatOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/offered-course-class-schedule/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteOfferedCourseClassSchedule = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/offered-course-class-schedule/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const OfferedCourseClassScheduleService = {
    createOfferedCourseClassSchedule,
    getAllOfferedCourseClassSchedules,
    getSinglOfferedCourseClassSchedule,
    updatOfferedCourseClassSchedule,
    deleteOfferedCourseClassSchedule
};