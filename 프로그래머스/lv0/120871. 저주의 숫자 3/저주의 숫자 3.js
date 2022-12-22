function solution(n) {
    let answer = 1;
    let count = 1;
    while (true) {
        if (answer % 3 === 0 || String(answer).includes('3')) {
            answer++;
            continue;
        }
        if (count === n) break;
        answer++;
        count++;
    }
    return answer;
}