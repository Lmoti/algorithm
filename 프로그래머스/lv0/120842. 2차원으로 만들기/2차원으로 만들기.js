function solution(num_list, n) {
    let answer = [];
    let len = num_list.length / n;
    for (let i = 0; i < len; i++) {
        answer.push([...num_list.slice(0, n)]);
        num_list = num_list.slice(n);
    }
    return answer;
}