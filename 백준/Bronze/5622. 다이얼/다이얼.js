const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let total = 0;

const obj = {
  3: ["A", "B", "C"],
  4: ["D", "E", "F"],
  5: ["G", "H", "I"],
  6: ["J", "K", "L"],
  7: ["M", "N", "O"],
  8: ["P", "Q", "R", "S"],
  9: ["T", "U", "V"],
  10: ["W", "X", "Y", "Z"],
};

for (let char of input) {
  for (let time in obj) {
    if (obj[time].includes(char)) {
      total += +time;
      break;
    }
  }
}

console.log(total);