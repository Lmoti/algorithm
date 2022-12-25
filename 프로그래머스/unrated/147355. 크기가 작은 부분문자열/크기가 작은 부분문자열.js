function solution(t, p) {
    let answer = 0;
    let idx = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        let str = '';
        for (let j = i; j < i + p.length; j++) {
            str += t[j];
        }
        if (Number(str) <= Number(p)) answer++;
    }
    return answer;
}