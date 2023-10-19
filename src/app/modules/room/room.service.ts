import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { coreService as HttpService } from '../../../shared/axios';

const createRoom = async (req: Request): Promise<IGenericResponse> => {
    const response: IGenericResponse = await HttpService.post('room/create-room', req.body, {
      headers: {
        Authorization: req.headers.authorization
      }
    });
    return response;
  };

const getAllRooms = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/room', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const getSingleRoom = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.get(`/room/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const updateRoom = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.patch(`/room/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const deleteRoom = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await HttpService.delete(`/room/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const RoomService = {
    createRoom,
    getAllRooms,
    getSingleRoom,
    updateRoom,
    deleteRoom,
};