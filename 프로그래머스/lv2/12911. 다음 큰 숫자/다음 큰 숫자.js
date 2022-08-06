function solution(n) {
    const nOne = count(n);
    function count(num) {
        let binary = num.toString(2)
        let c = 0;
        for (let i of binary) {
            if (Number(i) === 1) {
                c++;
            }
        }
        return c;
    }
    while(true) {
        n++;
        const bignum = count(n)
        if (nOne === bignum) return n;
    }
}