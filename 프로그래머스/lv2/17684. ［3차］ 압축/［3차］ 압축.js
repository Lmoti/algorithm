function solution(msg) {
    const answer = [];
    const obj = {};
    let idx = 0;
    const a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    a.split('').forEach((n, i) => {
        obj[n] = i + 1;
    })
    while (idx < msg.length) {
        let word = '';
        while (obj[word + msg[idx]]) {
            word += msg[idx];
            idx++;
        }
        answer.push(obj[word]);
        obj[word + msg[idx]] = Object.keys(obj).length + 1;
    }
    return answer;
}