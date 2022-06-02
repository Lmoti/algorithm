function solution(s) {
    return `${s.split(' ').sort((a, b) => a - b)[0]} ${s.split(' ').sort((a, b) => a - b)[s.split(' ').length - 1]}`
}