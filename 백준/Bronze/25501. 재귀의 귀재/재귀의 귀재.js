const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift();

function recursion(str, l, r, num) {
    num++
    if (l >= r) return [1, num];
    else if(str[l] !== str[r]) return [0, num];
    else return recursion(str, l + 1, r - 1, num);
}

for (let i = 0; i < input.length; i++) {
    let num = 0;
    console.log(recursion(input[i], 0, input[i].length - 1, num).join(' '));
}