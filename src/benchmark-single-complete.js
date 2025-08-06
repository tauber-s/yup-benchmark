import cronometro from 'cronometro';
import * as yup from './schema-yup.js';
import * as joi from './schema-joi.js';
import { users } from '../data/data-users.js';

const singleUser = users[0];

cronometro({
  joi: function () {
    joi.completeSchema.validate(singleUser);
  },
  yup: function () {
    yup.completeSchema.isValidSync(singleUser);
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
║ yup          │ 10000000 │  75884.43 op/sec │  ± 0.04 % │                         ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test │  Samples │           Result │ Tolerance │ Difference with slowest ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ joi          │ 10000000 │ 164257.23 op/sec │  ± 0.07 % │ + 116.46 %              ║
╚══════════════╧══════════╧══════════════════╧═══════════╧═════════════════════════╝

{
  "joi": {
    "success": true,
    "size": 10000000,
    "min": 4300,
    "max": 11799183,
    "mean": 6088.0121891,
    "stddev": 12553.86955250342,
    "percentiles": {
      "1": 4500,
      "10": 4699,
      "25": 4800,
      "50": 5099,
      "75": 5800,
      "90": 7000,
      "99": 24999,
      "0.001": 4399,
      "0.01": 4400,
      "0.1": 4499,
      "2.5": 4599,
      "97.5": 11200,
      "99.9": 66299,
      "99.99": 462789,
      "99.999": 697383
    },
    "standardError": 3.969882123454957
  },
  "yup": {
    "success": true,
    "size": 10000000,
    "min": 9499,
    "max": 10177827,
    "mean": 13177.9335146,
    "stddev": 15288.939371415117,
    "percentiles": {
      "1": 9800,
      "10": 10000,
      "25": 10200,
      "50": 10700,
      "75": 12400,
      "90": 15400,
      "99": 45899,
      "0.001": 9599,
      "0.01": 9600,
      "0.1": 9700,
      "2.5": 9900,
      "97.5": 32499,
      "99.9": 256293,
      "99.99": 494687,
      "99.999": 749083
    },
    "standardError": 4.834787142189481
  }
}
 */