function solution(array, n) {
    array.sort((a, b) => a - b);
    let dif = Math.abs(n - array[0]);
    let answer = array[0];
    array.forEach((num) => {
        if (Math.abs(n - num) < dif) {
            dif = Math.abs(n - num);
            answer = num;
        }
    })
    return answer;
}