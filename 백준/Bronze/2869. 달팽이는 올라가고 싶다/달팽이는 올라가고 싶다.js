const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((el) => +el);

const [a, b, c] = input;

console.log(Math.ceil((c - b) / (a - b)));