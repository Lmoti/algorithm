function solution(rsp) {
    let answer = '';
    let rspWin = {'0': '5', '2': '0', '5': '2'};
    for (let i of rsp.split('')) {
        answer += rspWin[i];
    }
    return answer;
}