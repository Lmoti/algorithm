const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [a, b] = input.shift().split(' ').map((el) => +el);

const set = new Set(input.slice(0, a));
const arr = input.slice(a);
let answer = 0;

for (let str of arr) {
    if (set.has(str)) answer++;
}
console.log(answer);