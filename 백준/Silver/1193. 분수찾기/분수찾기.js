let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let group = 0;
while (input > 0) {
    group++;
    input -= group;
}

if (group % 2 === 0) {
    console.log(`${input + group}/${1 - input}`);
} else {
    console.log(`${1 - input}/${input + group}`);
}