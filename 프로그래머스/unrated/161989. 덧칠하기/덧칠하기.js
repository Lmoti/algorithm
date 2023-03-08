function solution(n, m, section) {
    let answer = 0;
    let last = 0;
    for (let num of section) {
        if (last < num) {
            answer++;
            last = num + m - 1;
        }
    }
    return answer;
}