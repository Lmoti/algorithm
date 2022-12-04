function solution(n) {
    let answer = 0;
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0) answer++;
    }
    return Number.isInteger(Math.sqrt(n)) ? answer * 2 + 1 : answer * 2;
}