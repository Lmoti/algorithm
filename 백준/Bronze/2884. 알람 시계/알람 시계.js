const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((i) => +i);

let hour = input[0];
let min = input[1];

if (min < 45) {
    hour--;
    min += 15;
} else min -= 45;
if (hour < 0) hour = 23;
console.log(`${hour} ${min}`);