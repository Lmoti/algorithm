function solution(a, b) {
    var answer = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        answer += i;
    }
    return answer;
//     let maxNum = Math.max(a, b);
//     let minNum = Math.min(a, b);
//     let answer = minNum;
//     function helper(minNum) {
//         if (minNum < maxNum) {
//             minNum += 1;
//             answer += minNum;
//         }
//         else {
//             return answer;
//         }
        
//         return helper(minNum);
//     }
//     return answer;
}