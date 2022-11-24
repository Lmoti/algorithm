function solution(spell, dic) {
    const word = spell.sort().join('');
    const arr = [];
    dic.forEach((n) => {
        arr.push(n.split('').sort().join(''));
    })
    return arr.indexOf(word) !== -1 ? 1 : 2
}