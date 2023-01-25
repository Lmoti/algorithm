function solution(dartResult) {
    let answer = 0;
    let arr = [];
    let temp = dartResult[0];
    for (let i = 1; i < dartResult.length; i++) {
        if (temp.length === 0) {
            temp += dartResult[i];
            continue;
        }
        if (!isNaN(+temp.at(-1)) && !isNaN(dartResult[i])) temp += dartResult[i];
        else if (isNaN(dartResult[i])) temp += dartResult[i];
        else {
            arr.push(temp);
            temp = dartResult[i];
        }
        if (i === dartResult.length - 1) arr.push(temp);
    }
    arr = arr.map((el) => el.split(/(\D)/));
    let prevtemp = 0;
    for (let round of arr) {
        let temp = 0;
        for (let i = 0; i < round.length; i++) {
            if (i === 0) temp += +round[0];
            if (round[i] === '') continue;
            
            if (round[i] === 'D') temp **= 2;
            else if (round[i] === 'T') temp **= 3;
            
            if (round[i] === '*') {
                answer += prevtemp;
                temp *= 2;
            } else if (round[i] === '#') temp *= -1;
        }
        answer += temp;
        prevtemp = temp;
    }
    
    return answer;
}