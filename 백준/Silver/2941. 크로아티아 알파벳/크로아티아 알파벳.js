let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let str of arr) {
  input = input.replaceAll(str, "1");
}

console.log(input.length);
