function solution(A, B) {
    let word = A;
    
    for (let i = 0; i < A.length; i++) {
        if (word === B) return i;
        word = [word[word.length - 1], ...word.slice(0, word.length - 1)].join('');
    }
    
    return -1;
}