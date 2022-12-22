function solution(a, b) {
    let answer = 0;
    let gcd = (a, b) => a % b === 0 ? b : gcd(b, a % b);
    b = b / gcd(a, b);
    while (b % 2 === 0) {
        b /= 2;
    }
    while (b % 5 === 0) {
        b /= 5;
    }
    return b === 1 ? 1 : 2;
}