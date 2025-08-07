import cronometro from 'cronometro';
import * as yup from './schema-yup.js';
import * as joi from './schema-joi.js';
import { users } from '../data/data-users.js';

const manyUsers = users;

cronometro({
  joi: function () {
    manyUsers.map(user => joi.simpleSchema.validate(user));
  },
  yup: function () {
    manyUsers.map(user => yup.simpleSchema.isValidSync(user));
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
  10.000 SAMPLES | SIMPLE SCHEMA - MULTIPLE USERS
  ╔══════════════╤════════════════╤═══════════╤═════════════════════════╗
  ║ Slower tests │         Result │ Tolerance │ Difference with slowest ║
  ╟──────────────┼────────────────┼───────────┼─────────────────────────╢
  ║ Yup          │  994.94 op/sec │  ± 0.30 % │                         ║
  ╟──────────────┼────────────────┼───────────┼─────────────────────────╢
  ║ Fastest test │         Result │ Tolerance │ Difference with slowest ║
  ╟──────────────┼────────────────┼───────────┼─────────────────────────╢
  ║ Joi          │ 1449.63 op/sec │  ± 0.34 % │ + 45.70 %               ║
  ╚══════════════╧════════════════╧═══════════╧═════════════════════════╝

{
  "joi": {
    "success": true,
    "size": 10000,
    "min": 497897,
    "max": 2988184,
    "mean": 689832.5861,
    "stddev": 232050.56596885715,
    "percentiles": {
      "1": 501997,
      "10": 515397,
      "25": 535999,
      "50": 613499,
      "75": 733695,
      "90": 993295,
      "99": 1534791,
      "0.001": 497897,
      "0.01": 497897,
      "0.1": 499297,
      "2.5": 503797,
      "97.5": 1347695,
      "99.9": 2139903,
      "99.99": 2624687,
      "99.999": 2988191
    },
    "standardError": 2320.5056596885715
  },
  "yup": {
    "success": true,
    "size": 10000,
    "min": 744095,
    "max": 4576773,
    "mean": 1005087.562,
    "stddev": 306271.962611541,
    "percentiles": {
      "1": 749099,
      "10": 766795,
      "25": 786395,
      "50": 898195,
      "75": 1114695,
      "90": 1369095,
      "99": 2184287,
      "0.001": 744095,
      "0.01": 744095,
      "0.1": 746095,
      "2.5": 751299,
      "97.5": 1854991,
      "99.9": 2983183,
      "99.99": 3414991,
      "99.999": 4576799
    },
    "standardError": 3062.71962611541
  }
}
 */