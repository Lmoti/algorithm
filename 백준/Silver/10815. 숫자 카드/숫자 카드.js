const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const arr1 = new Set(input[0].split(' ').map((el) => +el));
const arr2 = input.pop().split(' ').map((el) => +el);
const answer = [];
for (let num of arr2) {
    arr1.has(num) ? answer.push(1) : answer.push(0);
}
console.log(answer.join(' '));