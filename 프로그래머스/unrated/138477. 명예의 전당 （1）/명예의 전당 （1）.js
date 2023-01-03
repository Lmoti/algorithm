function solution(k, score) {
    const answer = [];
    const arr = [];
    for (let num of score) {
        if (arr.length < k) {
            arr.push(num);
            arr.sort((a, b) => a - b);
        } else {
            if (arr[0] < num) {
                arr.splice(0, 1, num);
                arr.sort((a, b) => a - b);
            }
        }
        answer.push(arr[0]);
    }
    return answer;
}