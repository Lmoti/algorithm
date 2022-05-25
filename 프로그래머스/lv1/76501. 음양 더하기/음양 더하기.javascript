function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < signs.length; i++) {
        let num = signs[i] ? absolutes[i] : -absolutes[i];
        answer += num;
    }
    return answer;
}