function solution(num) {
    let answer = 0;
    if (num === 1) {
        return 0;
    }
    while (answer <= 500) {
        if (num / 2 === 1) {
            answer ++;
            return answer;
        }
        else if (num % 2 === 0) {
            num = num / 2;
            answer ++;
        }
        else if (num % 2 === 1) {
            num = num * 3 + 1;
            answer++;
        }
    }
    return -1;
}