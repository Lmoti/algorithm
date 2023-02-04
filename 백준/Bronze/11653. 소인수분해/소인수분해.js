let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

while (input % 2 === 0) {
    input /= 2;
    console.log(2);
}

for (let i = 3; i <= Math.sqrt(input); i += 2) {
    while (input % i === 0) {
        input /= i;
        console.log(i);
    }
}

if (input > 2) console.log(input);