let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

let answer = 0;
input = input[0].split(" ").map((el) => +el);
for (let num of input) {
  if (num === 1) continue;
  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) isPrime = false;
  }
  if (isPrime) answer++;
}
console.log(answer);