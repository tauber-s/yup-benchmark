import { object, string, date } from 'yup';

export const simpleSchema = object({
  userId: string().uuid(),
  username: string(),
  password: string(),
  name: string(),
  email: string().email(),
  createdOn: date().default(() => new Date()),
});

export const completeSchema = object({
  userId: string().uuid(),
  username: string().min(3).max(30).required('Username is required'),
  password: string().min(8).max(50).required('Password is required'),
  name: string().required('Name is required'),
  email: string().email('Invalid email').required('Email is required'),
  createdOn: date().default(() => new Date()),
});