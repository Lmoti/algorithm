function solution(babbling) {
    let answer = 0;
    const double = ['ayaaya', 'yeye', 'woowoo', 'mama'];
    for (let i of babbling) {
        if (double.some((el) => i.includes(el))) continue;
        i = i.replaceAll('aya', '1').replaceAll('ye', '1').replaceAll('woo', '1').replaceAll('ma', '1');
        i = i.replaceAll('1', '');
        if (i === '') answer++;
    }
    return answer;
}