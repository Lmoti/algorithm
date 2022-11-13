function solution(s) {
    let answer = '';
    const words = {};
    for (let i = 0; i < s.length; i++) {
        if (!words[s[i]]) words[s[i]] = 1;
        else words[s[i]]++;
    }
    for (let word in words) {
        if (words[word] === 1) answer += word;
    }
    return answer.split('').sort().join('');
}