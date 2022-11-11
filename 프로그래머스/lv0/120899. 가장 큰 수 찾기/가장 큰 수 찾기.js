function solution(array) {
    const answer = [];
    let maxNum = 0;
    let maxIdx = 0;
    for (let num of array) {
        if (num >= maxNum) {
            maxNum = num;
            maxIdx = array.indexOf(maxNum);
        }
    }
    answer.push(maxNum);
    answer.push(maxIdx);
    return answer;
}