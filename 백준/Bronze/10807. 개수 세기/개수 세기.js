const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map((el) => +el).filter((el) => el === +input[2]);

console.log(arr.length);