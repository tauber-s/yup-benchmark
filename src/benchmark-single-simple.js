import cronometro from 'cronometro';
import * as yup from './schema-yup.js';
import * as joi from './schema-joi.js';
import { users } from '../data/data-users.js';

const singleUser = users[0];

cronometro({
  joi: function () {
    joi.simpleSchema.validate(singleUser);
  },
  yup: function () {
    yup.simpleSchema.isValidSync(singleUser);
  },
}, {
  iterations: 10_000_000,
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
 * 
╔══════════════╤══════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests │  Samples │           Result │ Tolerance │ Difference with slowest ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ yup          │ 10000000 │ 101242.27 op/sec │  ± 0.04 % │                         ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test │  Samples │           Result │ Tolerance │ Difference with slowest ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ joi          │ 10000000 │ 179773.26 op/sec │  ± 0.05 % │ + 77.57 %               ║
╚══════════════╧══════════╧══════════════════╧═══════════╧═════════════════════════╝

{
  "joi": {
    "success": true,
    "size": 10000000,
    "min": 4099,
    "max": 3493343,
    "mean": 5562.5626317,
    "stddev": 9462.010101789088,
    "percentiles": {
      "1": 4299,
      "10": 4400,
      "25": 4500,
      "50": 4700,
      "75": 5399,
      "90": 6299,
      "99": 20198,
      "0.001": 4199,
      "0.01": 4199,
      "0.1": 4299,
      "2.5": 4399,
      "97.5": 8499,
      "99.9": 57894,
      "99.99": 435257,
      "99.999": 671431
    },
    "standardError": 2.9921503165175167
  },
  "yup": {
    "success": true,
    "size": 10000000,
    "min": 7499,
    "max": 9130347,
    "mean": 9877.2970652,
    "stddev": 13329.410419328351,
    "percentiles": {
      "1": 7699,
      "10": 7899,
      "25": 7999,
      "50": 8200,
      "75": 9300,
      "90": 11199,
      "99": 31897,
      "0.001": 7599,
      "0.01": 7599,
      "0.1": 7600,
      "2.5": 7799,
      "97.5": 22798,
      "99.9": 225883,
      "99.99": 430169,
      "99.999": 786043
    },
    "standardError": 4.215129679225767
  }
}
 */