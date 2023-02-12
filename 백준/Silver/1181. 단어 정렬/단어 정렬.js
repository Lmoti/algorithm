const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
const arr = Array.from(new Set(input));
arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

console.log(arr.join("\n"));
