import { faker } from '@faker-js/faker';
import {generateFile} from './generate-file.js';

const users = []
const quantity = 100;

for (let i = 0; i < quantity; i++) {
  users.push({
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdOn: faker.date.past()
  });
};

const fileName = 'data-users.js';
const content = `export const users = ${JSON.stringify(users, null, 2)};\n`;

generateFile(fileName, content);
