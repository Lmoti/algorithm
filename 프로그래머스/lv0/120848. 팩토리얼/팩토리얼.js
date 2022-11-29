function solution(n) {
    let num = 1;
    let answer = 1;
    while (num < n) {
        answer++;
        num *= answer;
    }
    return num === n ? answer : answer - 1; 
}