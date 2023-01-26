const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
    const [a, b] = input[i].split(' ').map((el) => +el);
    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`);
}