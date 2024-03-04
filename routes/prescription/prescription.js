import express from 'express';
import Prescription from '../../db/models/PrescriptionSchema.js';

const router = express.Router();

//crud and by id
router.get('/', async (req, res) => {
  try {
    const Prescription = await Prescription.find();
    res.status(200).json(Prescription);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const Prescription = await Prescription.create(req.body);
    res
      .status(200)
      .json({ message: 'Prescription added', Prescription: Prescription });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Prescription = await Prescription.findById(id);
    res.status(200).json(Prescription);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const Prescription = await Prescription.updateById(id);
    res
      .status(200)
      .json({ message: 'Prescription updated', Prescription: Prescription });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const mediPrescriptioncines = await Prescription.DeleteById(id);
    res
      .status(200)
      .json({ message: 'Prescription deleted', Prescription: Prescription });
  } catch (e) {
    res.status(500).json(e);
  }
});
//list by appointment
router.get('/appointment/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const prescription = await Prescription.find({ appointment: id });
    res.status(200).json(prescription);
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
