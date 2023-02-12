let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
input = input.map((el) => el.split(' '));
input.sort((a, b) => +a[0] - +b[0]);
input = input.map((el) => el.join(' '));
console.log(input.join('\n'));