const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[1].split(' ').map((el) => +el);
const b = input[2].split(' ').map((el) => +el);

const union = [...new Set([...a, ...b])];

console.log(2 * union.length - (a.length + b.length));