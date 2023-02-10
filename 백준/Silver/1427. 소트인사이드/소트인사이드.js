const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map((el) => +el);

console.log(input.sort((a, b) => b - a).join(''));