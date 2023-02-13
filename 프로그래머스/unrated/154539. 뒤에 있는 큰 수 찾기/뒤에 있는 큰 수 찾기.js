function solution(numbers) {
    const answer = Array(numbers.length).fill(-1);
    let stack = [];
    for (let i = 0; i < numbers.length; i++) {
        while(stack.length && numbers[stack.at(-1)] < numbers[i]) answer[stack.pop()] = numbers[i];
        stack.push(i);
    }
    
    while (stack.length) {
        answer[stack.pop()] = -1;
    }
    return answer;
}