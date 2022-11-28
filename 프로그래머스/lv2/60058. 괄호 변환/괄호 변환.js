function solution(p) {
        let right = 0;
        let u = '';
        let v = '';
        for (let i = 0; i < p.length; i++) {
            p[i] === '(' ? right++ : right--;
            if (right < 0) break;
        }
        if (right === 0) return p;
        else right = 0;
        for (let i = 0; i < p.length; i++) {
            p[i] === '(' ? right++ : right--;
            if (right === 0) {
                u = p.slice(0, i + 1);
                v = p.slice(i + 1);
                break;
            }
        }
        if (u[0] === '(') return u + solution(v);
        else {
            let a = '';
            let b = u.slice(1, u.length - 1);
            for (let i = 0; i < b.length; i++) {
                b[i] === '(' ? a += ')' : a += '('
            }
            return '(' + solution(v) + ')' + a;
        }
}