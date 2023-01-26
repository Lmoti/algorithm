const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const [a, b] = input[i].split(' ').map((el) => +el);
    console.log(a + b);
}