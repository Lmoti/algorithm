function solution(clothes) {
    let answer = 1;
    const coordi = {};
    for (let el of clothes) {
        if (!coordi[el[1]]) {
            coordi[el[1]] = [el[0]];
        } else {
            coordi[el[1]].push(el[0])
        }
    }
    for (let key in coordi) {
        answer *= coordi[key].length + 1;
    }
    return answer - 1;
}