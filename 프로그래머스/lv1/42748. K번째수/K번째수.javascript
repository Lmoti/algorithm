function solution(array, commands) {
    const answer = [];
    for (let arr of commands) {
        const sort = array.slice(arr[0] - 1, arr[1]).sort((a, b) => a-b);
        answer.push(sort[arr[2]-1]);
    }
    return answer;
}