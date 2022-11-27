function solution(my_string) {
    const arr = [];
    for (let i = 0; i < my_string.length; i++) {
        if (Number(my_string[i]) || my_string[i] === '0') arr.push(Number(my_string[i]));
    }
    return arr.sort((a, b) => a - b);
}