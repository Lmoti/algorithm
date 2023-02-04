const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((el) => +el);

const [min, max] = input;
const arr = [];
for (let i = min; i <= max; i++) {
    if (i === 1) continue;
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) isPrime = false;
    }
    if (isPrime) arr.push(i);
}
const total = arr.reduce((a, b) => a + b, 0);
console.log(arr.length === 0 ? -1 : total + '\n' + Math.min(...arr));