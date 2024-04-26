import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  lastname: {
    type: String,
    required: [true, 'Lastname is required'],
  },
  number: {
    type: Number,
    required: [true, 'Number is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
});

module.exports = model('User', userSchema, 'users');
