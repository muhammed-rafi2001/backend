import express from 'express';
import Doctor from '../../db/models/doctorSchema.js';

const router = express.Router();

//crud and by id
router.get('/', async (req, res) => {
  try {
    const Doctor = await Doctor.find();
    res.status(200).json(Doctor);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const Doctor = await Doctor.create(req.body);
    res.status(200).json({ message: 'Doctor added', Doctor: Doctor });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Doctor = await Doctor.findById(id);
    res.status(200).json(Doctor);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Doctor = await Doctor.updateById(id);
    res.status(200).json({ message: 'Doctor updated', Doctor: Doctor });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Doctor = await Doctor.DeleteById(id);
    res.status(200).json({ message: 'Doctor deleted', Doctor: Doctor });
  } catch (e) {
    res.status(500).json(e);
  }
});
export default router;
