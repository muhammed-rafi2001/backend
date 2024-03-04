import { Schema, model } from 'mongoose';

const schema = Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    image: {
      type: String,
      trim: true,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const User = model('User', schema);

export default User;
