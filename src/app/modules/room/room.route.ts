import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
import auth from '../../middlewares/auth';
import { RoomController } from './room.controller';

const router = express.Router();

router.get('/', RoomController.getAllRooms);
router.get('/:id', RoomController.getSingleRoom);

router.post('/', RoomController.createRoom);

router.patch('/:id', RoomController.updateRoom);

router.delete('/:id', RoomController.deleteRoom);

export const RoomRoutes = { router };
