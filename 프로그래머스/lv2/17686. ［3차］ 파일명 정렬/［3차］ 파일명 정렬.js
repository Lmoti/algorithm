function solution(files) {
    const obj = {};
    for (let file of files) {
        let head = '';
        let number = '';
        let tail = '';
        let check = true;
        for (let i = 0; i < file.length; i++) {
            if (number === '' && (isNaN(Number(file[i])) || file[i] === ' ')) head += file[i];
            else if (!isNaN(Number(file[i])) && check) number += file[i];
            else {
                check = false;
                tail += file[i];
            }
        }
        obj[file] = [head.toLowerCase(), +number, tail];
    }
    const arr = Object.entries(obj);
    arr.sort((a, b) => {
        if (a[1][0] < b[1][0]) return -1;
        else if (a[1][0] > b[1][0]) return 1;
        else return a[1][1] - b[1][1]
    })
    return arr.map((el) => el[0]);
}