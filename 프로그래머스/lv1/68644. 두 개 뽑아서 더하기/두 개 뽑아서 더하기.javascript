function solution(numbers) {
    const answer = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let ele = (numbers[i] + numbers[j]);
            if (!answer.includes(ele)) answer.push(ele);
        }
    }
    return answer.sort((a, b) => a - b);
    
}