function solution(array) {
    return [...array.join('')].filter(num => num === '7').length;
}