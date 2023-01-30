const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.shift();
for (let test of input) {
    let temp = 1;
    let result = 0;
    for (let i = 0; i < test.length; i++) {
        if (test[i] === 'X') temp = 1;
        else {
            result += temp;
            temp++;
        }
    }
    console.log(result);
}