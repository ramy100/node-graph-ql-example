import mongoose, { Document } from 'mongoose';
import { hashPassword } from './utils';
import { IUser } from './IUser';
const { Schema } = mongoose;

export type UserDoc = IUser & Document;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true }, // String is shorthand for {type: String}
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre<UserDoc>('save', async function (next) {
  await hashPassword(this);
  return next();
});

userSchema.pre<any>('updateOne', async function (next) {
  await hashPassword(this._update);
  return next();
});

export const UserModel = mongoose.model<UserDoc>('User', userSchema);
