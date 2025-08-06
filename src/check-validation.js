import * as yup from './schema-yup.js';
import * as joi from './schema-joi.js';
import { users } from '../data/data-users.js';

const singleUser = users[0];
const manyUsers = users;

// single user
console.log('##### single user');
console.log('YUP');
console.log('yup simple', yup.simpleSchema.isValidSync(singleUser))
console.log('yup complete', yup.completeSchema.isValidSync(singleUser))
console.log('------------------');
console.log('JOI');
console.log('joi simple', !joi.simpleSchema.validate(singleUser).error)
console.log('joi complete', !joi.completeSchema.validate(singleUser).error)
console.log('------------------');

// many users
console.log('\n##### many users');
console.log('YUP');
console.log('yup simple', manyUsers.map(user => yup.simpleSchema.isValidSync(user)).every(result => result === true))
console.log('yup complete', manyUsers.map(user => yup.completeSchema.isValidSync(user)).every(result => result === true))
console.log('------------------');
console.log('JOI');
console.log('joi simple', manyUsers.map(user => joi.simpleSchema.validate(user)).every(result => !result.error))
console.log('joi complete', manyUsers.map(user => joi.completeSchema.validate(user)).every(result => !result.error))