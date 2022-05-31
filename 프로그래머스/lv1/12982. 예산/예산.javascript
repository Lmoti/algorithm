function solution(d, budget) {
    let result = 0;
    d.sort((a, b) => a - b);
    for (let num of d) {
        budget -= num;
        if (budget >= 0) {
            result++;
        } else {
            break;
        }
    }
    return result;
}