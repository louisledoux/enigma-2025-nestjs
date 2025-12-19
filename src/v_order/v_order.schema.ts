import mongoose from 'mongoose';

export class Order {
  customerName: string;
  productIds: string[];
}

export const OrderSchema = new mongoose.Schema({
  customerName: String,
  productIds: [String],
});
