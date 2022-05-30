function solution(numbers) {
    let answer = '';
    let str = numbers.map(value => String(value));
    str.sort((a, b) => (b + a) - (a + b));
    answer += str.join('');
    return answer[0] === '0' ? '0' : answer;
}