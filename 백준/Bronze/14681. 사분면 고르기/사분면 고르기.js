const input = require('fs').readFileSync(0).toString().trim().split('\n').map((i) => +i);

const x = input[0];
const y = input[1];

if (x > 0) {
    if (y > 0) console.log(1);
    else console.log (4);
} else {
    if (y > 0) console.log(2);
    else console.log (3);
}