function solution(dots) {
    const arr = [...dots];    
    arr.sort((a, b) => b[0] - a[0]);
    return Math.abs(arr[0][1] - arr[1][1]) * Math.abs(arr[1][0] - arr[2][0]);
}