function solution(str1, str2) {
    const eng = /^[a-zA-Z]*$/;
    const arr1 = [];
    const arr2 = [];
    let union = [];
    const intersect = [];
    
    for (let i = 0; i < str1.length - 1; i++) {
        let j = str1[i] + str1[i + 1]
        if (eng.test(j)) arr1.push(j.toLowerCase())
    }
    
    for (let i = 0; i < str2.length - 1; i++) {
        let j = str2[i] + str2[i + 1]
        if (eng.test(j)) arr2.push(j.toLowerCase())
    }
    
    for (let i of arr1) {
        if (arr2.includes(i)) {
            intersect.push(i);
            arr2.splice(arr2.indexOf(i), 1);
        }
    }
    
    union = arr1.concat(arr2);
    if (arr1.length === 0 && arr2.length === 0) return 65536;
    return Math.floor(intersect.length / union.length * 65536);
}