function solution(new_id) {
    let result = '';
    const sw = '-_.~!@#$%^&*()=+[{]}:?,<>/'.split('')
    let word = new_id.split('')
    for (let i of word) {
        result += i.toLowerCase();
    }
    const sp = result.split('')
    for (let i of result) {
        if (sw.includes(i)) {
            if (i !== '-' && i !== '_' && i !== '.') {
                sp.splice(sp.indexOf(i), 1);
            }
        }
    }
    let num = 0;
    while (true) {
        if (sp[num] === '.' && sp[num + 1] === '.') {
            sp.splice(num + 1, 1);
        } else {
            num++;
        }
        if (num >= sp.length) {
            break;
        }
    }
    if (sp[0] === '.') {
            sp.splice(0, 1);
    }
    
    if (sp[sp.length - 1] === '.') {
            sp.splice(sp.length - 1, 1);
    }
    if (sp.length === 0) {
        sp.push('a');
    }
    if (sp.length > 15) {
        sp.splice(15, sp.length - 15);
    }
    if (sp[sp.length - 1] === '.') {
        sp.splice(sp.length - 1, 1);
    }
    if (sp.length < 3) {
        while (sp.length < 3) {
            sp.push(sp[sp.length - 1]);
        }
    }
    return sp.join('')
}