function solution(s) {
    // return `${s.split(' ').sort((a, b) => a - b)[0]} ${s.split(' ').sort((a, b) => a - b)[s.split(' ').length - 1]}`
    return `${Math.min(...s.split(' '))} ${Math.max(...s.split(' '))}`;
}