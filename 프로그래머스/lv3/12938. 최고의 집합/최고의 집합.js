function solution(n, s) {
    if (n > s) return [-1];
    if (n === s) return new Array(n).fill(1);
    
    if (s % n === 0) return new Array(n).fill(s / n);
    else {
        const r = s % n;
        return [...new Array(n - r).fill((s - r) / n), ...new Array(r).fill(((s - r) / n) + 1)];
    }
}