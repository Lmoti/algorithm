function solution(score) {
    const answer = [];
    const arr = [];
    const obj = {};
    let rank = 1;
    score.forEach((n) => {
        arr.push((n[0] + n[1]) / 2);
    })
    arr.sort((a, b) => b - a);
    arr.forEach((n) => {
        if (!obj[n]) {
            obj[n] = rank;
        }
        rank++;
    })
    score.forEach((n) => {
        answer.push(obj[(n[0] + n[1]) / 2]);
    })
    return answer;
}