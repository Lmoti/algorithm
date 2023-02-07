const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const max = input.map((el, i) => {
    const arr = el.split(' ').map((el) => +el);
    const maxNum = Math.max(...arr);
    return [maxNum, [i + 1, arr.indexOf(maxNum) + 1]];
});
max.sort((a, b) => b[0] - a[0]);
max[0][1] = max[0][1].join(' ');
console.log(max[0].join('\n'));