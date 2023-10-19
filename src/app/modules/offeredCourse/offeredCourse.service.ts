import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/offered-course/create-course', req.body, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    return response;
  };

const getAllOfferedCourses = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await HttpService.get('/offered-course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSinglOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/offered-course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updatOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/offered-course/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteOfferedCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/offered-course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const OfferedCourseService = {
    createOfferedCourse,
    getAllOfferedCourses,
    getSinglOfferedCourse,
    updatOfferedCourse,
    deleteOfferedCourse,
};