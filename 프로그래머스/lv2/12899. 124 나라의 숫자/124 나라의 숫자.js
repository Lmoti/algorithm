// 1.문제를 파악 => 1,2,4 3개이므로 3진법 메커니즘.
// 2. 3진법으로 변환해서 비교
// 0 = 0, 1 = 1, 2 = 2, 3 = 10
// 0은 표현이 안되므로 제외, 3 = 4가 나오려면 0을 4로 바꿔주고 앞에서 하나를 당겨쓴다. 즉, -1을 해준다.

// ex) 10
function solution(n) {
    const stack = [];
    while(n > 0) {
        if (n % 3 === 0) {
            // 나머지가 0이면 나머지를 4로 바꿔주고 몫에서 -1.
            stack.push(4);
            n = Math.floor(n / 3) - 1;
        } else {
            // 나머지가 0이 아닌 경우 3진법으로 계산.
            stack.push(n % 3);
            n = Math.floor(n / 3);
        }
    }

    return stack.reverse().join('');
    //stack = [1, 4] 이므로 뒤집어서 문자열로 변환 => return 값은 '41'
}