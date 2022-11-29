function solution(my_string) {
    my_string += 'a'
    let answer = 0;
    let str = '';
    for (let i = 0; i < my_string.length; i++) {
        if (Number.isNaN(Number(my_string[i])) && str !== '') {
            answer += Number(str);
            str = '';
        }
        else if (!Number.isNaN(Number(my_string[i]))) str += my_string[i];
    }
    return answer;
}