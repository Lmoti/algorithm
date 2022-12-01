function solution(numbers, k) {
    let num = 0;
    for (let i = 1; i < k; i++) {
        num += 2;
        if (num >= numbers.length) num -= numbers.length;
    }
    return numbers[num];
}