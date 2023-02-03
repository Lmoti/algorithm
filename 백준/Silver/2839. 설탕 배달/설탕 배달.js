let input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let num = 0;
while (input > 0) {
  if (input % 5 === 0) {
    num += input / 5;
    input %= 5;
    break;
  }
  num++;
  input -= 3;
}
console.log(input !== 0 ? -1 : num);