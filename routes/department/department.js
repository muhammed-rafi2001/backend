import express from 'express';
import Department from '../../db/models/departmentSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const departments = await Department.create(req.body);
    res.status(200).json(departments);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
