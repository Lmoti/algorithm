const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [x, y] = input.shift().split(" ").map((el) => +el);
const a = input.slice(0, x).map((el) => el.split(" "));
const b = input.slice(x).map((el) => el.split(" "));

const arr = Array.from(Array(x), () => Array(y).fill(0));
for (let i = 0; i < x; i++) {
  for (let j = 0; j < y; j++) {
    arr[i][j] = +a[i][j] + +b[i][j];
  }
}

console.log(arr.map((el) => el.join(" ")).join("\n"));