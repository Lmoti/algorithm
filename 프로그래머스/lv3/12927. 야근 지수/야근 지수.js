function solution(n, works) {
    const totalworks = works.reduce((a, b) => a + b, 0);
    if (totalworks <= n) return 0;
    works.sort((a, b) => b - a);
    while (n) {
        let max = works[0];
        for (let i = 0; i < works.length; i++) {
            if (works[i] >= max) {
                works[i]--;
                n--;
            }
            if (!n) break;
        }
    }
    return works.reduce((a, b) => a + Math.pow(b, 2), 0);
}