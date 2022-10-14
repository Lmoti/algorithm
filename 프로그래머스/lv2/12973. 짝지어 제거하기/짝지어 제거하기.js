function solution(s) {
    const arr = [];
    for (let i = 0; i < s.length; i++) {
        if(arr.length === 0 || arr[arr.length - 1] !== s[i]) arr.push(s[i])
        else arr.pop();
    }
    
    return arr.length === 0 ? 1 : 0;
}