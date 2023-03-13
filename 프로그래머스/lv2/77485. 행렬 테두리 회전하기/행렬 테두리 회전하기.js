function solution(rows, columns, queries) {
    const answer = [];
    const arr = [];
    let tempArr = [];
    for (let i = 1; i <= rows * columns; i++) {
        tempArr.push(i);
        if (i % columns === 0) {
            arr.push(tempArr);
            tempArr = [];
        } 
    }
    for (let query of queries) {
        let [x1, y1, x2, y2] = query;
        x1--;
        y1--;
        x2--;
        y2--;
        const target = [[x1, y1], [x1, y2], [x2, y2], [x2, y1]];
        let prev = arr[x1][y1];
        let min = prev;
        for (let i = 0; i < target.length; i++) {
            let [c1, c2] = target[i];
            let [n1, n2] = target[i + 1] || target[0];
            
            while (c1 !== n1 || c2 !== n2) {
                if (i === 0) c2++;
                else if (i === 1) c1++;
                else if (i === 2) c2--;
                else c1--;
                
                let temp = arr[c1][c2];
                min = Math.min(temp, min);
                arr[c1][c2] = prev;
                prev = temp;
            }
        }
        answer.push(min);
    }
    return answer;
}