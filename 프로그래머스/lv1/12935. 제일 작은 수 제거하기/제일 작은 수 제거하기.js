function solution(arr) {
    let minNum = arr[0];
    let minIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNum) {
            minNum = arr[i];
            minIndex = i;
        }
    }
    arr.splice(minIndex, 1);
    if (arr.length === 0) {
        arr.unshift(-1);
    }
    return arr;
}