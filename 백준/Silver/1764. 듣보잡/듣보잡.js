let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((el) => Number(el));
const both = {};
const answer = [];

for (let i = 0; i < input.length; i++) {
  if (!both[input[i]]) {
    both[input[i]] = 1;
  } else {
    both[input[i]]++;
  }
}

for (let key in both) {
  if (both[key] > 1) {
    answer.push(key);
  }
}

console.log(`${answer.length}\n${answer.sort().join("\n")}`);
