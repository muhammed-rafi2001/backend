import express from 'express';

const router = express.Router();

router.get('/data', (req, res) => {
  try {
    res.status(200).json({ message: 'Data Page' });
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/data', (req, res) => {
  try {
    res.status(200).json({ message: 'Post Page' });
  } catch (e) {
    res.status(500).json(e);
  }
});

export default router;
