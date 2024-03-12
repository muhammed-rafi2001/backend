import express from 'express';
import Order from '../../db/models/orderSchema.js';
import checkToken from '../../middlewares/checkToken.js';
const router = express.Router();

//crud
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const orders = await Order.create(req.body);
    res.status(200).json({ message: 'Orders added', Order: orders });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findById(id);
    res.status(200).json(orders);
  } catch (e) {
    res.status(500).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findByIdAndUpdate(id);
    res.status(200).json({ message: 'Orders Updated', Order: orders });
  } catch (e) {
    res.status(500).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const orders = await Order.findByIdAndDelete(id);
    res.status(200).json({ message: 'Order Deleted', Order: orders });
  } catch (e) {
    res.status(500).json(e);
  }
});
//list order by userid
router.get('/user/:id', checkToken(['USER']), async (req, res) => {
  const { id } = req.params;
  const orders = await Order.find({ user: id });
  res.status(200).json(orders);
});
export default router;
