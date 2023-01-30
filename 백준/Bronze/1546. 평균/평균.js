let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map((el) => +el);
const max = Math.max(...arr);
arr = arr.map((el) => el / max * 100);
const total = arr.reduce((a, b) => a + b, 0);
console.log(total / +input[0]);