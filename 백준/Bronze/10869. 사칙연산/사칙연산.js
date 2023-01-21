const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

console.log(+input[0] + +input[1]);
console.log(+input[0] - +input[1]);
console.log(+input[0] * +input[1]);
console.log(Math.floor(+input[0] / +input[1]));
console.log(+input[0] % +input[1]);