function solution(n) {
    const answer = [];
    if (n % 2 === 0) answer.push(2);
    while (n % 2 === 0) {
        n /= 2;
    }
    console.log(n);
    for (let i = 3; Math.sqrt(i) <= n; i += 2) {
        while (n % i === 0) {
            if (!answer.includes(i)) answer.push(i);
            n /= i;
        }
    }
    if (n > 2) answer.push(n);
    return answer;
}