const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [a, b, c] = input;
console.log((+a + +b) % +c);
console.log(((+a % +c) + (+b % +c)) % +c);
console.log((+a * +b) % +c);
console.log(((+a % +c) * (+b % +c)) % +c);