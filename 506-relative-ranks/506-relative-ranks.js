/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const a = [...score];
    a.sort((a, b) => b - a);
    for (let i = 0; i < score.length; i++) {
        if (a.indexOf(score[i]) === 0) score[i] = 'Gold Medal'
        else if (a.indexOf(score[i]) === 1) score[i] = 'Silver Medal'
        else if (a.indexOf(score[i]) === 2) score[i] = 'Bronze Medal'
        else score[i] = `${a.indexOf(score[i]) + 1}`
    }
    return score;
};