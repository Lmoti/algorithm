function solution(emergency) {
    const answer = [];
    const obj = {};
    let num = 1;
    [...emergency].sort((a, b) => b - a).forEach((n) => {
        obj[n] = num;
        num++;
    })
    for (let i of emergency) {
        answer.push(obj[i]);
    }
    return answer;
}