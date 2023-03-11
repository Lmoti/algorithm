function solution(id_list, report, k) {
    const answer = [];
    let reports = [...new Set(report)].map((el) => el.split(' '));
    const obj = {};
    const result = {};
    for (let id of id_list) {
        obj[id] = [];
    }
    for (let report of reports) {
        const [a, b] = report;
        obj[a].push(b);
        result[b] = ++result[b] || 1;
    }
    for (let char in obj) {
        const tempArr = obj[char];
        let count = 0;
        for (let temp of tempArr) {
            if (result[temp] >= k) count++;
        }
        answer.push(count);
    }
    return answer;
}