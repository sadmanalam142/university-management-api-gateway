import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post(
        '/offered-course-section/create-section',
      req.body,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return response;
  };

const getAllOfferedCourseSections = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/offered-course-section', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSinglOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/offered-course-section/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updatOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/offered-course-section/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteOfferedCourseSection = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(
    `/offered-course-section/${id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

export const OfferedCourseSectionService = {
    createOfferedCourseSection,
    getAllOfferedCourseSections,
    getSinglOfferedCourseSection,
    updatOfferedCourseSection,
    deleteOfferedCourseSection,
};