import joi from 'joi';

export const simpleSchema = joi.object().keys({
  userId: joi.string().guid(),
  username: joi.string(),
  password: joi.string(),
  name: joi.string(),
  email: joi.string().email(),
  createdOn: joi.date(),
}).required();

export const completeSchema = joi.object().keys({
  userId: joi.string().guid(),
  username: joi.string().min(3).max(30).required(),
  password: joi.string(),
  name: joi.string().required(),
  email: joi.string().email().required(),
  createdOn: joi.date(),
}).required();