function solution(my_string) {
    let answer = '';
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i].toLowerCase() === my_string[i]) answer += my_string[i].toUpperCase();
        else answer += my_string[i].toLowerCase();
    }
    return answer;
}