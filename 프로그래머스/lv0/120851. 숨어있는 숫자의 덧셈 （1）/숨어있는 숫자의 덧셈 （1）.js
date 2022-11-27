function solution(my_string) {
    let answer = 0;
    let str = '';
    for (let i = 0; i < my_string.length; i++) {
        if (Number(my_string[i])) answer += Number(my_string[i]);
    }
    return answer;
}