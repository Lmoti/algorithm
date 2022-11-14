function solution(record) {
    const record1 = record.map((el) => el.split(' '));
    const result = {}
    const answer = [];
    for (let rec of record1) {
        if (!result[rec[1]]) result[rec[1]] = rec[2];
        else if (rec[2]) result[rec[1]] = rec[2];
    }
    for (let rec of record1) {
        if (rec[0] === 'Enter') {
            answer.push(`${result[rec[1]]}님이 들어왔습니다.`);
        } else if (rec[0] === 'Leave') {
            answer.push(`${result[rec[1]]}님이 나갔습니다.`);
        }
    }
    return answer;
}