function solution(n) {
    const numArr = [0, 1];
    if (n < 2) return n % 1234567;
    else {
        for (let i = 2; i <= n; i++) {
            numArr.push((numArr[i - 1] + numArr[i - 2]) % 1234567);
        }
        return numArr[n]; 
    }
}