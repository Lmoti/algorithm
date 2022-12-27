function solution(babbling) {
    let answer = 0;
    const babble = ["aya", "ye", "woo", "ma"];
    for (let str1 of babbling) {
        let str = str1;
        for (let str2 of babble) {
            str = str.replace(str2, '.');
        }
        str = str.replaceAll('.', '');
        if (str === '') answer++;
    }
    return answer;
}