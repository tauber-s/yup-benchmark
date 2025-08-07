import cronometro from 'cronometro';
import * as yup from './schema-yup.js';
import * as joi from './schema-joi.js';
import { users } from '../data/data-users.js';

const manyUsers = users;

cronometro({
  joi: function () {
    manyUsers.map(user => joi.completeSchema.validate(user));
  },
  yup: function () {
    manyUsers.map(user => yup.completeSchema.isValidSync(user));
  },
}, {
  iterations: 10_000,
  errorThreshold: 0,
  warmup: true,
  print: {
    colors: false,
    compare: true,
    compareMode: 'base'
  }
}, (err, results) => {
  if (err) {
    throw err;
  };
  console.log(JSON.stringify(results, null, 2));
});

/**
  10.000 SAMPLES | COMPLETE SCHEMA - MULTIPLE USERS
  ╔══════════════╤════════════════╤═══════════╤═════════════════════════╗
  ║ Slower tests │         Result │ Tolerance │ Difference with slowest ║
  ╟──────────────┼────────────────┼───────────┼─────────────────────────╢
  ║ Yup          │  924.68 op/sec │  ± 0.18 % │                         ║
  ╟──────────────┼────────────────┼───────────┼─────────────────────────╢
  ║ Fastest test │         Result │ Tolerance │ Difference with slowest ║
  ╟──────────────┼────────────────┼───────────┼─────────────────────────╢
  ║ Joi          │ 1414.06 op/sec │  ± 0.35 % │ + 52.93 %               ║
  ╚══════════════╧════════════════╧═══════════╧═════════════════════════╝

{
  "joi": {
    "success": true,
    "size": 10000,
    "min": 524198,
    "max": 6192269,
    "mean": 707181.9219,
    "stddev": 244748.92382544672,
    "percentiles": {
      "1": 528799,
      "10": 540199,
      "25": 552099,
      "50": 624199,
      "75": 744899,
      "90": 1028795,
      "99": 1629095,
      "0.001": 524199,
      "0.01": 524199,
      "0.1": 525899,
      "2.5": 531399,
      "97.5": 1364799,
      "99.9": 2348095,
      "99.99": 3938191,
      "99.999": 6192287
    },
    "standardError": 2447.489238254467
  },
  "yup": {
    "success": true,
    "size": 10000,
    "min": 920196,
    "max": 2852387,
    "mean": 1081458.1678,
    "stddev": 190967.54278818634,
    "percentiles": {
      "1": 925199,
      "10": 931399,
      "25": 947599,
      "50": 991795,
      "75": 1187199,
      "90": 1308599,
      "99": 1789199,
      "0.001": 920199,
      "0.01": 920199,
      "0.1": 922899,
      "2.5": 926999,
      "97.5": 1584895,
      "99.9": 2215903,
      "99.99": 2592799,
      "99.999": 2852399
    },
    "standardError": 1909.6754278818635
  }
}
 */