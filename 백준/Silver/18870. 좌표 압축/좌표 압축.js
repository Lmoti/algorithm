const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

const answer = [];
const arr = input[0].split(' ').map((el) => +el);
const set = [...new Set(arr)].sort((a, b) => a - b);
const obj = {};
set.forEach((num, i) => obj[num] = i);

for (let num of arr) {
    answer.push(obj[num]);
}

console.log(answer.join(' '));