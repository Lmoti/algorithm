const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
}