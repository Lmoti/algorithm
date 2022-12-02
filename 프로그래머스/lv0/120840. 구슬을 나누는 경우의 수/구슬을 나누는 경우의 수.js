function solution(balls, share) {
    function factorial(num) {
        if (num === 1) return BigInt(1);
        return BigInt(num) * BigInt(factorial(num - 1));
    }
    return balls === share ? 1 : (factorial(balls) / (factorial(balls - share) * factorial(share)));
}