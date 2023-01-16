function solution(expression) {
    const result = [];
    const calc = {
        '+' : (a, b) => a + b,
        '-' : (a, b) => a - b,
        '*' : (a, b) => a * b,
    }
    const operator = [
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['+', '*', '-'],
        ['+', '-', '*'],
        ['*', '+', '-'],
        ['*', '-', '+']
        
    ]
    for (let i of operator) {
        const temp = expression.split(/(\D)/);
        for (let j of i) {
            while (temp.includes(j)) {
                const idx = temp.indexOf(j);
                temp.splice(idx - 1, 3, calc[j](+temp[idx - 1], +temp[idx + 1]));
            }
        }
        result.push(Math.abs(temp[0]));
    }
    return Math.max(...result);
}