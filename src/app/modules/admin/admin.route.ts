import express from 'express';
import { AdminController } from './admin.controller';

const router = express.Router();

router.get('/', AdminController.getAllFromDB);
router.get('/:id', AdminController.getByIdFromDB);

router.patch('/:id', AdminController.updateOneInDB);

router.delete('/:id', AdminController.deleteByIdFromDB);

export const AdminRoutes = { router };
