function solution(n, k) {
    let answer = 0;
    const arr = n.toString(k).split('0').map((el) => +el).filter((el) => el > 1);
    return arr.filter((el) => {
        for (let i = 2; i <= Math.sqrt(el); i++) {
            if (el % i === 0) return false;
        }
        return true;
    }).length;
}