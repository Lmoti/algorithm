/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (trust.length === 0 && n === 1) {
        return 1;
    }
    // 믿는 사람 명수
    const people = {};
    // 믿는 사람 명단
    const trustPeople = {};
    for (let el of trust) {
        if (!people[el[1]]) people[el[1]] = 1;
        else people[el[1]]++;
        if (!trustPeople[el[0]]) trustPeople[el[0]] = [el[1]];
        else trustPeople[el[0]].push(el[1]);
    }
    for (let key in people) {
        if (people[key] === n - 1) {
            if (trustPeople[key] === undefined) return key;
        }
    }
    return -1;
};