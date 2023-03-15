function solution(s) {
    s = s.split('');
    if (new Set(s).size % 2 !== 0 || s.length % 2 !== 0) return 0;
    let answer = 0;
    const obj = { '(' : ')', '{' : '}', '[' : ']' };
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        let check = true
        for (let j = 0; j < s.length; j++) {
            if (s[j] === '(' || s[j] === '{' || s[j] === '[') stack.push(s[j]);
            else {
                if (s[j] !== obj[stack.at(-1)]) {
                    check = false;
                    break;
                }
                stack.pop();
            }
        }
        if (check) answer++;
        s.push(s.shift());
    }
    return answer;
}