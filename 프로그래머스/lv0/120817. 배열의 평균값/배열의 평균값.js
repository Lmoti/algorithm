function solution(numbers) {
    let num = 0;
    numbers.forEach((n) => {
        num += n;
    })
    num /= numbers.length;
    return Number.isInteger(num) ? Number(num + '.0') : num;
}