const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let a = 0;
for (let i = 1; i <= input; i++) {
    a += i;
}
console.log(a);