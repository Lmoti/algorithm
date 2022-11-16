function solution(array) {
    if (array.length === 1) return array[0];
    const object = {};
    array.forEach((n) => {
        object[n] = ++object[n] || 1;
    })
    const value = Object.values(object);
    let maxNum = value[0];
    let answer = Object.keys(object)[0];
    for (let i in object) {
        if (object[i] > maxNum) {
            maxNum = object[i];
            answer = i;
        }
    }
    value.sort((a, b) => b - a);
    return value[0] === value[1] ? -1 : Number(answer);
}