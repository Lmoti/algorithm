function solution(n, t, m, p) {
    let answer = '';
    let turn = 1;
    for (let i = 0; i < t * m; i++) {
        let str = i.toString(n);
        for (let j = 0; j < str.length; j++) {
            if (turn > m) turn -= m;
            if (turn === p) answer += str[j];
            turn++;
        }
        if (answer.length >= t) return answer.slice(0, t).toUpperCase();
    }
}