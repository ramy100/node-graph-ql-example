import mongoose, { Document } from 'mongoose';
import { IBook } from './IBook';
const { Schema } = mongoose;

export type BookDoc = IBook & Document;

const bookSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    file: { type: String, required: true },
    user_id: { type: 'ObjectId', ref: 'User', required: true },
  },
  { timestamps: true }
);

export const BookModel = mongoose.model<BookDoc>('Book', bookSchema);
