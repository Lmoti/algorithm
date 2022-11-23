function solution(n, words) {
    const said = [words[0]];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length === 1 || words[i].length > 50) {
            let num = (i + 1)% n;
            if (num === 0) num = n;
            return [num, Math.ceil((i + 1) / n)]
        }
        if (said[i - 1][said[i - 1].length - 1] === words[i][0] && !said.includes(words[i])) {
            said.push(words[i]);
        } else {
            let num = (i + 1) % n;
            if (num === 0) num = n;
            return [num, Math.ceil((i + 1)/ n)]
        }
    }
    return [0, 0]
}