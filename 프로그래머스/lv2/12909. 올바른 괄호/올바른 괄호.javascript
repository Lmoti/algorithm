function solution(s){
    const word = [...s]
    let leftbracket = 0;
    if (s[0] === ')') return false;
    for (let bracket of word) {
        if (bracket === '(') {
            leftbracket++;
        }
        else if (leftbracket >= 1 && bracket === ')') {
            leftbracket--;
        }
    }
    if (leftbracket === 0) return true;
    else return false;
}