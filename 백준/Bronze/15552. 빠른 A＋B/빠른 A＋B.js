let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
input = input.slice(1);
input.map((el) => {
    const temp = el.split(' ');
    answer += +temp[0] + +temp[1] + '\n';
})
console.log(answer);