function solution(number, limit, power) {
    let answer = 0;
    const arr = [1];
    for (let i = 2; i <= number; i++) {
        let n = 0;
        for (let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) n++;
        }
        Number.isInteger(Math.sqrt(i)) ? arr.push(2 * (n - 1) + 1) : arr.push(2 * n);
    }
    arr.forEach((n) => {
        n > limit ? answer += power : answer += n;
    })
    return answer;
}