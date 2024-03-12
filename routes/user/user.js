import express from 'express';
import User from '../../db/models/userSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
router.post('/signup', async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ email: body.email });
  if (user) {
    return res.status(400).json({ error: 'Email already exists' });
  }
  if (body.password != body.confirmPassword) {
    return res.status(400).json({ error: 'Password does not match' });
  }
  const hashedPassword = await bcrypt.hash(body.password, 2);
  body.password = hashedPassword;

  const newUser = await User.create(body);
  return res
    .status(200)
    .json({ message: 'sign up successfull', user: newUser });
});
router.post('/login', async (req, res) => {
  const body = { ...req.body };
  const user = await User.findOne({ email: body.email });
  if (!user) {
    return res.status(400).json({ error: 'Email or password incorrect' });
  }
  const isMatching = await bcrypt.compare(body.password, user.password);
  if (!isMatching) {
    return res.status(400).json({ error: 'email or password incorrect' });
  }
  const key = process.env.SECRET_KEY;
  const token = jwt.sign({ role: 'USER', id: user._id }, key, {
    expiresIn: '7d',
  });
  console.log(isMatching);
  console.log(token);
  res.status(200).json({ message: 'Login Successfull', token });
});
//edit user profile

router.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const body = { ...req.body };
  const users = await User.findByIdAndUpdate(id, body);
  res.status(200).json({ message: 'User profile updated' });
});
export default router;
