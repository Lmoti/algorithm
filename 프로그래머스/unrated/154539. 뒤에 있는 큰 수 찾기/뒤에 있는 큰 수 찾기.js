function solution(numbers) {
    let stack = [];
    for (let i = 0; i < numbers.length; i++) {
        while(stack.length && numbers[stack.at(-1)] < numbers[i]) numbers[stack.pop()] = numbers[i];
        stack.push(i);
    }
    
    while (stack.length) {
        numbers[stack.pop()] = -1;
    }
    return numbers;
}