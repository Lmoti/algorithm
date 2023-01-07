function solution(n) {
    const answer = [1, 1, 2];
    for (let i = 3; i <= n; i++) {
        answer.push((answer[i - 1] + answer[i - 2]) % 1234567);
    }
    console.log(answer);
    return answer[n];
}