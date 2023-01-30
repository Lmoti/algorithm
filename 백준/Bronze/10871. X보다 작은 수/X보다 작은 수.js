const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = +input[0].split(' ')[1];
console.log(input[1].split(' ').map((el) => +el).filter((el) => el < num).join(' '));