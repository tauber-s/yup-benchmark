import cronometro from 'cronometro';

const pattern = /[123]/g
const replacements = { 1: 'a', 2: 'b', 3: 'c' }

const subject = '123123123123123123123123123123123123123123123123'

const results = cronometro({
  single() {
    subject.replace(pattern, m => replacements[m])
  },
  multiple() {
    subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
  }
});
// const results = cronometro(
//   {
//     single() {
//       subject.replace(pattern, m => replacements[m])
//     },
//     multiple() {
//       subject.replace(/1/g, 'a').replace(/2/g, 'b').replace(/3/g, 'c')
//     }
//   },
//   {
//     setup: {
//       single(cb) {
//         cb()
//       }
//     },
//     print: { compare: true }
//   },
//   (err, results) => {
//     if (err) {
//       throw err
//     }

//     console.log(JSON.stringify(results, null, 2))
//   }
// )

// console.log(results);