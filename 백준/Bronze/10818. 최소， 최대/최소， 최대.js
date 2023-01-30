const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map((el) => +el);
console.log(Math.min(...arr), Math.max(...arr));