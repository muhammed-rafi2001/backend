import express from 'express';
import departmentRoutes from './department/department.js';
import imageRoutes from './image/image.js';
const router = express.Router();
router.use('/department', departmentRoutes);
router.use('/upload', imageRoutes);

export default router;
