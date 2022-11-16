function solution(array) {
    const object = {};
    for (let num of array) {
        if (!object[num]) object[num] = 1;
        else object[num]++;
    }
    const value = Object.values(object);
    let maxNum = value[0];
    let answer = Object.keys(object)[0];
    let count = 0;
    for (let i in object) {
        if (object[i] > maxNum) {
            maxNum = object[i];
            answer = i;
        }
    }
    for (let num of value) {
        if (maxNum === num) count++;
        if (count > 1) return -1;
    }
    return Number(answer);
}