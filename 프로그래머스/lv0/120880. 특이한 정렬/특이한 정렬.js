function solution(numlist, n) {
    const arr = [...numlist];
    arr.sort((a, b) => {
        if (Math.abs(a - n) === Math.abs(b - n)) {
            return b - a;
        }
        return Math.abs(a - n) - Math.abs(b - n);
    })
    return arr;
}