const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

const arr = [0, 1];

for (let i = 2; i <= input; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
}

console.log(arr[input]);