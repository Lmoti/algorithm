function solution(s, skip, index) {
    let answer = '';
    s = s.split('');
    for (let str of s) {
        let charcode = str.charCodeAt();
        let num = 0;
        while (true) {
            if (num >= index) break;
            num++;
            charcode++;
            if (charcode > 122) {
                charcode = 97;
            }
            if (skip.includes(String.fromCharCode(charcode))) num--;
        }
        answer += String.fromCharCode(charcode);
    }
    return answer;
}