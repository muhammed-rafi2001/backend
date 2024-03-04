import { Schema, model } from 'mongoose';

const schema = Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    slot: {
      type: Schema.Types.ObjectId,
      ref: 'Slot',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    status: {
      type: String,
      enum: ['BOOKED', 'DONE', 'CANCELLED'],
    },
  },
  { timestamps: true }
);
const Appointment = model('Appointment', schema);

export default Appointment;
