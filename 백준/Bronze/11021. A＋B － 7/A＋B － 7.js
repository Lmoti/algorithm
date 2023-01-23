const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
for (let i = 1; i <= +input[0]; i++) {
    const [a, b] = input[i].split(' ').map((el) => +el);
    answer += `Case #${i}: ${a + b}\n`;
}
console.log(answer);