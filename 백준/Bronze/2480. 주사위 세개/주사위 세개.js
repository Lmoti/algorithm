const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map((i) => +i);

if (input[0] === input[1] && input[1] === input[2]) console.log(10000 + input[0] * 1000);
else if (input[0] === input[1]) console.log(1000 + input[0] * 100);
else if (input[1] === input[2]) console.log(1000 + input[1] * 100);
else if (input[2] === input[0]) console.log(1000 + input[2] * 100);
else console.log(Math.max(...input) * 100);