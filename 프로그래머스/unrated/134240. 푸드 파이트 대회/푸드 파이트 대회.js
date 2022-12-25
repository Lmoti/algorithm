function solution(food) {
    let answer = '';
    for (let i = 1; i < food.length; i++) {
        answer += String(i).repeat(food[i] / 2);
    }
    return answer + 0 + [...answer].reverse().join('');
}