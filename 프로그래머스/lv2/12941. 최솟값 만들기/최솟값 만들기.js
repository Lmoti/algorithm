function solution(A,B){
    const a = A.sort((a, b) => a - b);    
    const b = B.sort((a, b) => b - a);
    let answer = 0;
    for(let i = 0; i < a.length; i++) {
        answer += a[i] * b[i];
    }
    return answer
}