function solution(n,a,b) {
    if (a > b) {
        const temp = b;
        b = a;
        a = temp;
    }
    let round = 1;
    while (a % 2 === 0 || a + 1 !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    return round;
}