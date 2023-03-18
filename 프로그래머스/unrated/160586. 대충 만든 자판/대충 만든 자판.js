function solution(keymap, targets) {
    const answer = [];
    const obj = {};
    for (let i = 0; i < keymap.length; i++) {
        const arr = keymap[i].split('');
        for (let j = 0; j < arr.length; j++) {
            obj[arr[j]] = obj[arr[j]] < j ? obj[arr[j]] : j;
        }
    }
    for (let i = 0; i < targets.length; i++) {
        const arr = targets[i].split('');
        let temp = 0;
        for (let str of arr) {
            temp += obj[str] + 1;
        }
        answer.push(isNaN(temp) ? -1 : temp);
    }
    return answer;
}