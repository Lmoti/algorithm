const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const count = input.shift();
let answer = 0;

for (let i = 0; i < count; i++) {
    const word = input[i];
    const arr = [word[0]];
    let isGroup = true;
    let prevStr = word[0];
    for (let j = 1; j < word.length; j++) {
        if (prevStr !== word[j] && arr.includes(word[j])) {
            isGroup = false;
            break;
        }
        arr.push(word[j]);
        prevStr = word[j];
    }
    if (isGroup) answer++;
}

console.log(answer);