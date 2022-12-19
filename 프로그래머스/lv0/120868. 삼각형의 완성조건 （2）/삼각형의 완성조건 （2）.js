function solution(sides) {
    let answer = 0;
    let [min, max] = [Math.min(...sides), Math.max(...sides)];
    let j = max + 1;
    for (let i = max - min + 1; i <= max; i++) {
        if (min + i > max) answer++;
    }
    while (min + max > j) {
        if (min + max > j) {
            answer++;
            j++;
        }
    }
    return answer;
}