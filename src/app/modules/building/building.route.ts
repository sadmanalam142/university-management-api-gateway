import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';

const router = express.Router();

router.get('/', BuildingController.getAllBuildings);
router.get('/:id', BuildingController.getSingleBuilding);

router.post('/', BuildingController.createBuilding);

router.patch('/:id', BuildingController.updateBuilding);

router.delete('/:id', BuildingController.deleteBuilding);

export const BuildingRoutes = { router };
