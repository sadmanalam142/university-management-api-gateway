import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createCourse = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('/course/create-course', req.body, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    return response;
  };

const getAllCourses = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/course', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/course/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteCourse = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/course/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const CourseService = {
    createCourse,
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    // assignFaculties,
    // removeFaculties,
};