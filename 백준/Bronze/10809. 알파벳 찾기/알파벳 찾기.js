const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const answer = [];
let str = "";

for (let i = 97; i < 123; i++) {
  const char = String.fromCharCode(i);
  if (input.includes(char) && str.indexOf(char) === -1) {
    answer.push(input.indexOf(char));
    str += char;
  } else answer.push(-1);
}

console.log(answer.join(" "));