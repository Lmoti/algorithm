const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const getFloatFixed = (value) => {
        return parseFloat(Math.round(value * 1000) / 1000).toFixed(3);
    };

input.shift();
for (let test of input) {
    test = test.split(' ').map((el) => +el);
    const student = test.shift();
    const total = test.reduce((a, b) => a + b, 0);
    const aver = total / student;
    let result = 0;
    for (let num of test) {
        if (num > aver) result++;
    }
    console.log(getFloatFixed(result / student * 100) + '%');
}