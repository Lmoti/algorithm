const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
for (let test of input) {
    const [repeat, prevstr] = test.split(' ');
    let str = '';
    for (let i = 0; i < prevstr.length; i++) {
        str += prevstr[i].repeat(repeat);
    }
    console.log(str);
}