function solution(my_str, n) {
    let answer = [];
    for (let i = 0; i < my_str.length; i+=n) {
        answer.push(my_str.slice(i, n + i));
    }
    return answer;
}