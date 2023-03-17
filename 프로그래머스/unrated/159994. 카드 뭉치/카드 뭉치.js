function solution(cards1, cards2, goal) {
    for (let str of goal) {
        if (str === cards1[0]) cards1.shift();
        else if (str === cards2[0]) cards2.shift();
        else return 'No';
    }
    return 'Yes';
}