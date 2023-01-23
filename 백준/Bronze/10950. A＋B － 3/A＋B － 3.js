const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 1; i <= +input[0]; i++) {
    const temp = input[i].split(' ');
    console.log(+temp[0] + +temp[1]);
}