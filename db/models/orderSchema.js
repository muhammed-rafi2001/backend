import { Schema, model } from 'mongoose';

const schema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    medicines: [{ type: Schema.Types.ObjectId, ref: 'Medicine' }],
    bookingDate: {
      type: Date,
    },
    deliveryDate: {
      type: Date,
      default: Date.now() + 4 * 24 * 30 * 60 * 1000,
    },
    status: {
      type: String,
      enum: ['CONFIRMED', 'SHIPPED', 'OUT OF DELIVERY', 'DELIVERED'],
    },
  },
  { timestamps: true }
);
const Order = model('Order', schema);

export default Order;
