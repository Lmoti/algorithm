function solution(my_string) {
    // return [...new Set(my_string)].join('')
    const str = {};
    let answer = '';
    for (let string of my_string.split('')) {
        if (!str[string]) {
            str[string] = 1;
            answer += string;
        }
    }
    return answer;
}