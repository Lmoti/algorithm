const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('').map((el) => el.toUpperCase());

if (input.length === 1) console.log(input[0]);
else {
    const obj = {};

    for (let char of input) {
      obj[char] = ++obj[char] || 1;
    }

    const arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);

    arr[0][1] === arr[1][1] ? console.log("?") : console.log(arr[0][0]);
}
