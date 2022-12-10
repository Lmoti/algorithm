function solution(numbers) {
    let num = 0;
    numbers.forEach((n) => {
        num += n;
    })
    return num / numbers.length;
}