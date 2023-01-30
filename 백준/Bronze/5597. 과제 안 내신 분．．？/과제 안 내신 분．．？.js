let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input.map((el) => +el);

for (let i = 1; i <= 30; i++) {
    if (!input.includes(i)) console.log(i);
}