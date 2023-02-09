let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [total, cut] = input.shift().split(' ').map((el) => +el);
input = input[0].split(' ').map((el) => +el).sort((a, b) => b - a);
console.log(input[cut - 1]);