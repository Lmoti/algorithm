function solution(arr)
{
    var answer = [];
    for (let pro of arr) {
        if (answer[answer.length - 1] === pro) {
            continue;
        }
        else {
            answer.push(pro);
        }
    }
    return answer;
}