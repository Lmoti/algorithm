function solution(ingredient) {
    let answer = 0;
    const burger = []
    for (let piece of ingredient) {
        burger.push(piece)
        if (piece === 1) {
            if (burger[burger.length - 2] === 3 && burger[burger.length - 3] === 2 && burger[burger.length - 4] === 1) {
                burger.splice(burger.length - 4, 4);
                answer++;
            }
        }
    }
    return answer;
}