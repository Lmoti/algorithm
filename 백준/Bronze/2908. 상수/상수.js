const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((el) => +el.split('').reverse().join(''));

console.log(Math.max(...input));