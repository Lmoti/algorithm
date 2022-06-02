function solution(n) {
  let count = 1;
  if (n > 1) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
      let num = 0;
      for (let j = i; j <= Math.ceil(n / 2); j++) {
        num += j;
        if (num === n) {
          count++;
          break;
        }
        if (num > n) break;
      }
    }
  }
  return count;
}
