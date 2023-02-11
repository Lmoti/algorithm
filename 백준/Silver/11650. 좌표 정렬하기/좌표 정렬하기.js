let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
input = input.map((el) => el.split(' ').map((el) => +el));
input.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
})
console.log(input.map((el) => el.join(' ')).join('\n'));