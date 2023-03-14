function solution(want, number, discount) {
    let answer = 0;
    for (let i = 0; i <= discount.length - 10; i++) {
        const map = new Map();
        const arr = discount.slice(i, i + 10);
        let check = true;
        for (let j = 0; j < arr.length; j++) {
            map.set(arr[j], map.get(arr[j]) + 1 || 1);
        }
        for (let k = 0; k < want.length; k++) {
            if (map.get(want[k]) !== number[k]) check = false;
        }
        if (check) answer++;
    }
    return answer;
}