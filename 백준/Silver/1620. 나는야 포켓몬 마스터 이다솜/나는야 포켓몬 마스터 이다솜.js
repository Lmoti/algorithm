const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = +input.shift().split(" ")[0];
const name = new Map();
const number = new Map();

for (let i = 0; i < num; i++) {
  number.set(i + 1, input[i]);
  name.set(input[i], +(i + 1));
}

for (let i = num; i < input.length; i++) {
  if (isNaN(Number(input[i]))) console.log(name.get(input[i]));
  else console.log(number.get(+input[i]));
}
