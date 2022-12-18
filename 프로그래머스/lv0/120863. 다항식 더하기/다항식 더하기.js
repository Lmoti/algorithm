function solution(polynomial) {
    let a = 0;
    let b = 0;
    polynomial = polynomial.split(' + ');
    polynomial.forEach((n) => {
        if (n.at(-1) === 'x') {
            if (n === 'x') a++;
            else a += Number(n.slice(0, n.length - 1));
        } else b += Number(n);
    })
    return `${a > 0 ? a === 1 ? 'x' : a + 'x' : ''}${b > 0 ? a === 0 ? b : ' + ' + b : ''}`
}