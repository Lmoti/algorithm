function solution(arr1, arr2) {
    const arr = [];
    for (let row of arr1) {
        const tempArr = [];
        for (let i = 0; i < arr2[0].length; i++) {
            let temp = 0;
            for (let j = 0; j < arr2.length; j++) {
                temp += row[j] * arr2[j][i];
            }
            tempArr.push(temp);
        }
        arr.push(tempArr);
    }
    return arr;
}