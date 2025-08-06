import cronometro from 'cronometro';
import { object, string, date } from 'yup';
import {users} from './users.js';

let userSchema = object({
  userId: string().uuid(),
  username: string(),
  password: string(),
  name: string(),
  email: string().email(),
  createdOn: date().default(() => new Date()),
});


const results = cronometro(
  {
    single() {
      userSchema.validateSync(users[0]);
    },
    multiple() {
      users.forEach(user => userSchema.validateSync(user));
    }
  },
  {
    iterations: 10_000,
    errorThreshold: 0,
    warmup: true,
    print: {
      compare: true,
      compareMode: 'base'
    }
  }, (err, results) => {
    if (err) {
      throw err
    }
    console.log(JSON.stringify(results, null, 2))
  }
);