import { Request } from "express";
import { coreService as HttpService } from '../../../shared/axios';
import { IGenericResponse } from "../../../interfaces/common";

const createSemester = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.post('/academic-semester/create-semester', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getAllSemesters = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-semester', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/academic-semesters/${id}`, {
      headers: {
          Authorization: req.headers.authorization
      }
  })
  return response;
};

const updateSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/academic-semesters/${id}`, req.body, {
      headers: {
          Authorization: req.headers.authorization
      }
  });
  return response;
};

const deleteSemester = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/academic-semesters/${id}`, {
      headers: {
          Authorization: req.headers.authorization
      }
  });
  return response;
};

export const AcademicSemesterService = {
  createSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteSemester
};
