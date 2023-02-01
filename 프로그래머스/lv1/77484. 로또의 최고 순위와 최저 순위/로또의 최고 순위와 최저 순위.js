function solution(lottos, win_nums) {
    let gacha = 0;
    let knowNum = 0;
    const answer = [];
    for (let num of lottos) {
        if (num === 0) gacha++;
        if (win_nums.includes(num)) knowNum ++;
    }
    7-(knowNum + gacha) > 6 ? answer.push(6) : answer.push(7-(knowNum + gacha));
    7-knowNum > 6 ? answer.push(6) : answer.push(7-knowNum);
    return answer;
    
}