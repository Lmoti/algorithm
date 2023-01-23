let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = [...input[0].split(' '), input[1]].map((i) => +i);

let [hour, min, time] = input;
min += time;
hour += Math.floor(min / 60);
min %= 60;
if (hour >= 24) hour -= 24;
console.log(`${hour} ${min}`);