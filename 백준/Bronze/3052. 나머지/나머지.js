const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el) => +el);

const arr = [];

for(let num of input) {
    if(!arr.includes(num % 42)) arr.push(num % 42);
}

console.log(arr.length);