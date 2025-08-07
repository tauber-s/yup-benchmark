# Yup Benchmark

This project compares the performance of two JavaScript/TypeScript validation libraries: **Yup** and **Joi**, using two types of schemas for each [one simple and one more comprehensive].

## Overview

- Two schemas per library:
  - **Simple**: basic and straightforward validations.
  - **Complete**: more robust validations with complex fields and additional rules.
- Tests performed:
  - Validation of a single user object.
  - Validation of an array with 100 user objects.
- Goal: to evaluate, through benchmarks, which library performs better under different levels of schema complexity.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/tauber-s/yup-benchmark.git

2. Navigate into the project folder:

    ```sh
    cd yup-benchmark
    ```

3. Install the dependencies:

    ```sh
    yarn install
    ```


# How to Run the Benchmarks
Run the benchmark suite using the following commands:

`yarn benchmark:single:simple` → runs the simple schema test with a single user

`yarn benchmark:single:complete` → runs the complete schema test with a single user

`yarn benchmark:many:simple` → runs the simple schema test with 100 users

`yarn benchmark:many:complete` → runs the complete schema test with 100 users

Each command will generate results comparing execution speed between Yup and Joi using simple and complex schemas.

Example output:
```js
╔══════════════╤══════════╤══════════════════╤═══════════╤═════════════════════════╗
║ Slower tests │  Samples │           Result │ Tolerance │ Difference with slowest ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ yup          │ 10000000 │ 101242.27 op/sec │  ± 0.04 % │                         ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ Fastest test │  Samples │           Result │ Tolerance │ Difference with slowest ║
╟──────────────┼──────────┼──────────────────┼───────────┼─────────────────────────╢
║ joi          │ 10000000 │ 179773.26 op/sec │  ± 0.05 % │ + 77.57 %               ║
╚══════════════╧══════════╧══════════════════╧═══════════╧═════════════════════════╝
```

# Expected Results
Benchmarks comparing Yup vs Joi for single user validation.

Benchmarks comparing Yup vs Joi for 100-user array validation.

Joi typically outperforms Yup, as demonstrated by the benchmark results.