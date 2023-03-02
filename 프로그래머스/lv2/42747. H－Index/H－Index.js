function solution(citations) {
    const arr = [];
    const max = Math.max(...citations);
    for (let i = 0; i <= max; i++) {
        const temp = citations.filter((el) => el >= i).length;
        if (i <= temp) arr.push(i);
    }
    return Math.max(...arr);
}