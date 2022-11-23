function solution(n, words) {
    let count = 1;
    let cycle = 1;
    const said = [words[0]];
    let breakGame = false;
    for (let i = 1; i < words.length; i++) {
        count++;
        if (count % n === 1) {
            cycle++;
            count = 1;
        }
        if (words[i].length === 1 || words[i].length > 50) {
            breakGame = true;
            break;
        }
        if (said[i - 1][said[i - 1].length - 1] === words[i][0] && !said.includes(words[i])) {
            said.push(words[i]);
        } else {
            breakGame = true;
            break;
        }
    }
    return breakGame ? [count, cycle] : [0, 0]
}