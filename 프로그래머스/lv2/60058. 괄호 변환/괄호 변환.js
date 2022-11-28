function solution(p) {
    let right = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') right++;
        else right--;
        if (right < 0) break;
    }
    if (right === 0) return p;
    function helper(words) {
        let right1 = 0;
        let u = '';
        let v = '';
        for (let i = 0; i < words.length; i++) {
            if (words[i] === '(') right1++;
            else right1--;
            if (right1 < 0) break;
        }
        if (right1 === 0) return words;
        else right1 = 0;
        for (let i = 0; i < words.length; i++) {
            if (words[i] === '(') right1++;
            else right1--;
            if (right1 === 0) {
                u = words.slice(0, i + 1);
                v = words.slice(i + 1);
                break;
            }
        }
        if (u[0] === '(') return u + helper(v);
        else {
            let a = '';
            let b = u.slice(1, u.length - 1);
            for (let i = 0; i < b.length; i++) {
                if (b[i] === '(') a += ')';
                else a += '(';
            }
            return '(' + helper(v) + ')' + a;
        }
    }
    return helper(p);
}