function solution(X, Y) {
    let answer = "";
    let xarr = [...X];
    let yarr = [...Y];
    
    for (let i = 0; i < 10; i++) {
        let xcount = xarr.filter((item) => item === String(i)).length;
        let ycount = yarr.filter((item) => item === String(i)).length;
        answer += i.toString().repeat(Math.min(xcount, ycount));
    }
    
    answer = [...answer].sort((a, b) => b - a).join("");
    if (answer === "") return "-1";
    else if (answer[0] === '0') return "0";
    else {
        return answer;
    }
}