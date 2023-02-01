const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')[1].split('').map((el) => +el);

console.log(input.reduce((a, b) => a + b, 0));