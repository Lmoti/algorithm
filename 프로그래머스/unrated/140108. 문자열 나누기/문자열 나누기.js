function solution(s) {
    let answer = 0;
    let idx = 1;
    let str = s[0];
    let count = [1, 0];
    let x = s[0];
    while (s.length > 0) {
        x === s[idx] ? count[0]++ : count[1]++;
        str += s[idx];
        idx++;
        if (idx > s.length) {
            answer++;
            break;
        }
        if (count[0] === count[1]) {
            x = s[idx];
            s = s.replace(str, '');
            str = '';
            idx = 0;
            count = [0, 0];
            answer++;
        }
    }
    return answer;
}