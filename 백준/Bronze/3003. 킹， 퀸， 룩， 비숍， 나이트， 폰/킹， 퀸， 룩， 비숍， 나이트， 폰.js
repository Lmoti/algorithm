const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const [king, queen, rook, bishop, knight, pawn] = input;

console.log(`${1 - king} ${1 - queen} ${2 - rook} ${2 - bishop} ${2 - knight} ${8 - pawn}`);