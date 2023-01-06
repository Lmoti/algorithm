
function solution (n) {
    const arr = [0, 3, 11];
  
    if(n % 2 === 1) return 0;
    if(n < 3) return arr[n / 2];
  
    for(let i = 3; i <= n / 2; i++) {
        arr[i] = arr[i-1] * 3 + 2;
    
        for(let j = 1; j < i - 1; j++) {
            arr[i] += arr[j] * 2;
        }
    
    arr[i] %= 1000000007;
    }
    console.log(arr);
    return arr[n / 2];
}