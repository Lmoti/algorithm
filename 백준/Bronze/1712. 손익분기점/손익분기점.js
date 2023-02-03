const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((el) => +el);

const [a, b, c] = input;
if (b >= c) console.log(-1);
else console.log(Math.floor(a / (c - b)) + 1);