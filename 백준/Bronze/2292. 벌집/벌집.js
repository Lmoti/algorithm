const input = +require('fs').readFileSync('/dev/stdin').toString().trim();

let num = 1;
let room = 1;
while (true) {
    if (input <= num) {
        console.log(room);
        break;
    }
    num += 6 * room;
    room++;
}