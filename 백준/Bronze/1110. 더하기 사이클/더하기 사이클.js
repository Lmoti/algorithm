let input = require('fs').readFileSync('/dev/stdin').toString().trim();

if (input.length === 1) input += '0'
let num = input;
let count = 0;

while (true) {
    if (num.length === 1) num += '0';
    const temp = +num[0] + +num[1];
    num = num[1] + String(temp).at(-1);
    count++;
    if (num === input) break;
}

console.log(count);