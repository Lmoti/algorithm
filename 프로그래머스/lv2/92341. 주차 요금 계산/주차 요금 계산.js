function solution(fees, records) {
    const answer = [];
    const obj = {};
    for (let record of records) {
        const [time, num, state] = record.split(' ');
        if (!obj[num]) obj[num] = [0, 0, ''];
        if (state === 'IN') {
            const [ih, im] = time.split(':').map((el) => +el);
            obj[num][0] = ih * 60 + im;
        }
        else {
            const [oh, om] = time.split(':').map((el) => +el);
            obj[num][1] += (oh * 60 + om) - obj[num][0];
        }
        obj[num][2] = state;
        
    }
    const arr = Object.entries(obj).sort((a, b) => +a[0] - +b[0]);
    for (let check of arr) {
        if (check[1][2] === 'IN') {
            obj[check[0]][1] += (23 * 60 + 59) - obj[check[0]][0];
            obj[check[0]][2] = 'OUT';
        }
    }
    for (let result of arr) {
        let cost = 0;
        if (fees[0] >= result[1][1]) cost = fees[1];
        else cost = fees[1] + Math.ceil((result[1][1] - fees[0]) / fees[2]) * fees[3];
        answer.push(cost);
    }
    return answer;
}