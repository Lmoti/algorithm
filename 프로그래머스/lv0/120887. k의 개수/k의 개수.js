function solution(i, j, k) {
    let answer = 0;
    for (let num = i; num <= j; num++) {
        answer += [...String(num)].filter((n) => n === String(k)).length;
    }
    return answer;
}