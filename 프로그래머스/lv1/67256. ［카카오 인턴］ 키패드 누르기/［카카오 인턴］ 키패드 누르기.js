function solution(numbers, hand) {
    let answer = '';
    let left = 10;
    let right = 12;
    numbers.forEach((n) => {
        let num = n;
        if (num === 0) num = 11;
        if (num % 3 === 1) {
            answer += 'L';
            left = num;
        } else if (num % 3 === 0 && num !== 0) {
            answer += 'R';
            right = num;
        } else {
            let lDiff = getDistance(left, num);
            let rDiff = getDistance(right, num);
            if (lDiff < rDiff) {
                answer += 'L';
                left = num;
            } else if (lDiff > rDiff) {
                answer += 'R';
                right = num;
            } else {
                if (hand === 'right') {
                    answer += 'R';
                    right = num;
                } else {
                    answer += 'L';
                    left = num;
                }
            }
        }
    })
    return answer;
}

function getDistance(cur, target) {
  if (cur + 1 === target || cur - 1 === target) return 1;

  if (cur % 3 === 1) return Math.abs((cur + 1 - target) / 3) + 1;
  else if (cur % 3 === 2) return Math.abs((cur - target) / 3);
  else return Math.abs((cur - 1 - target) / 3) + 1;
}