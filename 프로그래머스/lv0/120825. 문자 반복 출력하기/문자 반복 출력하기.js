function solution(my_string, n) {
    let str = '';
    my_string.split('').map(el => str += el.repeat(n));
    return str;
}