function solution(n) {
    let answer = 0;
    const arr = [...String(n)];
    for (let num of arr) {
        answer += Number(num);
    }
    return answer;
}