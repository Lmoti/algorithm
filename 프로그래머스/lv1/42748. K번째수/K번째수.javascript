function solution(array, commands) {
    return commands.map(a => {
        return array.slice(a[0] - 1, a[1]).sort((a, b) => a - b)[a[2] - 1];
    })
}