function solution(k, tangerine) {
    let answer = 0;
    const obj = {};
    for (let num of tangerine) {
        obj[num] = ++obj[num] || 1;
        // if (obj[num] >= k) return 1;
    }
    const arr = Object.values(obj).sort((a, b) => b - a);
    for (let el of arr) {
        k -= el;
        answer++;
        if (k <= 0) return answer;
    }
}