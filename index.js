import express from 'express';
import cors from 'cors';
import mongoose from './db/dbConnection.js';
import router from './routes/routes.js';
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static('uploads'));

app.use(router);
app.listen(3000, () => {
  console.log('App is Running at @ http://localhost:3000');
});
