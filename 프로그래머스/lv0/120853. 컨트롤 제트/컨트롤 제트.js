function solution(s) {
    let answer = 0;
    s = s.split(' ');
    for (let i = 0; i < s.length; i++) {
        s[i] === 'Z' ? answer -= Number(s[i - 1]) : answer += Number(s[i]);
    }
    return answer;
}