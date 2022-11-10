function solution(num, k) {
    const number = String(num).split('');
    for (let num of number) {
        if (Number(num) === k) return number.indexOf(num) + 1;
    }
    return -1
}