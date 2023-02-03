const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
for (let i = 0; i < input.length; i++) {
    const [height, width, num] = input[i].split(' ').map((el) => +el);
    console.log((num % height === 0 ? height : num % height) + String(Math.ceil(num / height)).padStart(2, '0'));
}