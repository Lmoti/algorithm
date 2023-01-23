const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let total = 0;
for (let i = 2; i < 2 + +input[1]; i++) {
    const [price, count] = input[i].split(' ').map((i) => +i);
    total += price * count;
}
total === +input[0] ? console.log('Yes') : console.log('No');