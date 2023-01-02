function solution(s) {
    const answer = [];
    const arr = s.slice(0, -2).replaceAll('{', '').split('},').sort((a, b) => a.length - b.length).join(',').split(',');
    let set = new Set();
    for (let num of arr) {
        if (set.has(+num)) continue;
        else {
            set.add(+num);
            answer.push(+num);
        }
    }
    return answer;
}