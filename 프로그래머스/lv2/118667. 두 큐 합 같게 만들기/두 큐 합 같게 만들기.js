function solution(queue1, queue2) {
    let answer = 0;
    const count = queue1.length * 3
    let sum = queue1.reduce((acc, cur, idx) => acc + cur - queue2[idx], 0) / 2;
    let [i1, i2] = [0, 0];
    while (sum !== 0 && answer < count) {
        if (sum > 0) {
            const n = queue1[i1];
            i1++;
            sum -= n;
            queue2.push(n);
        } else {
            const n = queue2[i2];
            i2++;
            sum += n;
            queue1.push(n);
        }
        answer++;
    }
    return sum === 0 ? answer : -1;
}