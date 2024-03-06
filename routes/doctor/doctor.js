import express from 'express';
import Doctor from '../../db/models/doctorSchema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const body = { ...req.body };
  const doctor = await Doctor.findOne({ email: body.email });
  if (doctor) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  if (body.password != body.confirmPassword) {
    return res.status(400).json({ error: 'Password does not match' });
  }
  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;

  const newDoctor = await Doctor.create(body);
  return res
    .status(200)
    .json({ message: 'sign up successfull', doctor: newDoctor });
});
router.post('/login', async (req, res) => {
  const body = { ...req.body };
  const doctor = await Doctor.findOne({ email: body.email });
  if (!doctor) {
    return res.status(400).json({ error: 'email or password incorrect' });
  }
  const isMatching = await bcrypt.compare(body.password, doctor.password);
  if (!isMatching) {
    return res.status(400).json({ error: 'email or password incorrect' });
  }
  const key = 'hquwhr328r2rjkwhr49rhwoefk0w3rahfksdfh0r049ror';
  const token = jwt.sign({ role: 'DOCTOR', id: doctor._id }, key, {
    expiresIn: '7d',
  });
  console.log(isMatching);
  console.log(token);
  res.status(200).json({ message: 'Login Successfull' });
});

export default router;
