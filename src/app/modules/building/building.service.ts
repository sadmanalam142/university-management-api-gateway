import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createBuilding = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('building/create-building', req.body, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    return response;
  };

const getAllBuildings = async (req: Request): Promise<IGenericResponse> => {
  console.log(req);
  const response: IGenericResponse = await HttpService.get('/building', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleBuilding = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/building/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateBuilding = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/building/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteBuilding = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/building/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const BuildingService = {
    createBuilding,
    getAllBuildings,
    getSingleBuilding,
    updateBuilding,
    deleteBuilding,
};