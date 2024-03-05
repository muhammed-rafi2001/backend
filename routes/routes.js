import express from 'express';
import departmentRoutes from './department/department.js';
import imageRoutes from './image/image.js';
import medicineRoutes from './medicine/medicine.js';
import prescriptionRoutes from './prescription/prescription.js';
import doctorRoutes from './doctor/doctor.js';
const router = express.Router();
router.use('/department', departmentRoutes);
router.use('/upload', imageRoutes);
router.use('/doctor', doctorRoutes);
router.use('/medicine', medicineRoutes);
router.use('/prescription', prescriptionRoutes);

export default router;
