import { Schema, model } from 'mongoose';

const schema = Schema(
  {
    doctor: {
      type: Schema.Types.ObjectId,
      ref: 'Doctor',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    appointment: {
      type: Schema.Types.ObjectId,
      ref: 'Appointment',
    },
    message: {
      type: String,
    },
    medicines: [{ type: Schema.Types.ObjectId, ref: 'Medicine' }],
  },
  { timestamps: true }
);
const Prescription = model('Prescription', schema);

export default Prescription;
