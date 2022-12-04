function solution(age) {
    let answer = '';
    let a = 'abcdefghij'
    for (let i of String(age).split('')) {
        answer += a[Number(i)];
    }
    return answer;
}