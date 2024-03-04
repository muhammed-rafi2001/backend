import express from 'express';
import Department from '../../db/models/departmentSchema.js';
import Medicine from '../../db/models/medicineSchema.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const medicines = await Medicine.create(req.body);
    res.status(200).json({ message: 'Medicine added', Medicine: Medicine });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const medicines = await Medicine.findById(id);
    res.status(200).json(medicines);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const medicines = await Medicine.updateById(id);
    res.status(200).json({ message: 'Medicine Updated', Medicine: Medicine });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const medicines = await Medicine.DeleteById(id);
    res.status(200).json({ message: 'Medicine Deleted', Medicine: Medicine });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
