function solution(order) {
    let answer = 0;
    let a = String(order).split('')
    a.forEach((n) => {
        if (n === '3' || n === '6'|| n ==='9') answer++;
    })
    return answer;
}