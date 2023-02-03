const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((el) => BigInt(el));

console.log(String(input[0] + input[1]));