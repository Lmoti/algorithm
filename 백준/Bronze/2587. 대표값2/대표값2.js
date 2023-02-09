const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el) => +el);

input.sort((a, b) => a - b);
const aver = input.reduce((a, b) => a + b, 0) / 5;
console.log([aver, input[2]].join('\n'));