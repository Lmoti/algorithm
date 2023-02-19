const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const answer = [];
const arr1 = input[1].split(" ").map((el) => +el);
const arr2 = input[3].split(" ").map((el) => +el);

const map = new Map();
for (let num of arr1) {
  map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
}

for (let num of arr2) {
  answer.push(map.has(num) ? map.get(num) : 0);
}

console.log(answer.join(' '));