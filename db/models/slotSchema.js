import { Schema, model } from 'mongoose';

const schema = Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['FREE', 'BOOKED', 'NOT AVAILABLE'],
      default: 'FREE',
    },
  },
  { timestamps: true }
);
const Slot = model('Slot', schema);

export default Slot;
