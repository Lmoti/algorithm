function solution(n, arr1, arr2) {
    const answer = [];
    const map = [];
    for (let i = 0; i < n; i++) {
        map.push([]);
        for (let j = 0; j < n; j++) {
            map[i].push(' ')
        }
    }
    const arr11 = arr1.map((el) => ('0'.repeat(15) + el.toString(2)).slice(-n));
    const arr22 = arr2.map((el) => ('0'.repeat(15) + el.toString(2)).slice(-n));
    for (let i = 0; i < n; i++) {
        const arr111 = arr11[i].split('');
        const arr222 = arr22[i].split('');
        for (let j = 0; j < n; j++) {
            Number(arr111[j]) === 1 ? map[i][j] = '#' : null;
            Number(arr222[j]) === 1 ? map[i][j] = '#' : null;
        }
    }
    map.map((el) => answer.push(el.join('')));
    return answer;
}