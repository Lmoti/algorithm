function solution(id_list, report, k) {
    const answer = [];
    const obj = {};
    const result = {};
    for (let id of id_list) {
        obj[id] = [];
    }
    for (let i = 0; i < report.length; i++) {
        const [a, b] = report[i].split(' ');
        if (!obj[a].includes(b)) obj[a].push(b);
    }
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            result[arr[i][j]] = ++result[arr[i][j]] || 1;
        }
    }
    for (let char in obj) {
        const tempArr = obj[char];
        let temp = 0;
        for (let i = 0; i < tempArr.length; i++) {
            if (result[tempArr[i]] >= k) temp++;
        }
        answer.push(temp);
    }
    return answer;
}