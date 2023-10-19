import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post(
      '/semester-registration/create-registration',
      req.body,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return response;
  };

const getAllSemesterRegistrations = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/semester-registration', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(
    `/semester-registration/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const deleteSemesterRegistration = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/semester-registration/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createStartRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    `/semester-registration/start-registration`,
    {},
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const enrollIntoCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    `/semester-registration/enroll-into-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const withdrawFromCourse = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    `/semester-registration/withdraw-from-course`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const confirmRegistration = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post(
    `/semester-registration/confirm-registration`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getRegistrations = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get(
      `/semester-registration/get-registrations`,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return response;
  };

const startNewSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.post(
    `/semester-registration/${id}/start-new-semester`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getMySemesterRegCouses = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.get(
      `/semester-registration/get-available-courses`,
      {
        headers: {
          Authorization: req.headers.authorization
        }
      }
    );
    return response;
  };

export const SemesterRegistrationService = {
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