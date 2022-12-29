function solution(s) {
    // const answer = [];
    // const obj = {};
    // for (let i = 0; i < s.length; i++) {
    //     if (!obj[s[i]]) {
    //         answer.push(-1);
    //         obj[s[i]] = [i];
    //     } else {
    //         answer.push(i - obj[s[i]].at(-1));
    //         obj[s[i]] = [...obj[s[i]], i];
    //     }
    // }
    // return answer;
    return [...s].map((el, i) => {
        const count = s.slice(0, i).lastIndexOf(el);
        return count < 0 ? count : i - count;
    })
}