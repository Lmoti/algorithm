function solution(s) {
    let zero = 0;
    let count = 0;
    while (s !== '1') {
        while (s.includes('0')) {
            s = s.replace('0', '');
            zero++;
        }
        s = s.length.toString(2);
        count++;
    }
    return [count, zero];
}