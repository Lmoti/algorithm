function solution(s1, s2) {
    let answer = 0;
    for (let el of s1) {
        if (s2.includes(el)) answer++;
    }
    return answer;
}