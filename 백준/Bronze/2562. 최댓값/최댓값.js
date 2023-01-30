const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el) => +el);

const max = Math.max(...input);
const idx = input.indexOf(max);

console.log(max + '\n' + (idx + 1));