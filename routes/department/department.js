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

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const departments = await Department.findById(id);
    res.status(200).json(departments);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const departments = await Department.findByIdAndUpdate(id);
    res
      .status(200)
      .json({ message: 'Department Updated', Department: departments });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const departments = await Department.findByIdAndDelete(id);
    res
      .status(200)
      .json({ message: 'Department Deleted', Department: departments });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
