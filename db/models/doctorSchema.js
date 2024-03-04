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
    specialization: {
      type: String,
      trim: true,
      required: true,
    },
    department: {
      type: Schema.Types.ObjectId,
      ref: 'Department',
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
const Doctor = model('Doctor', schema);

export default Doctor;
