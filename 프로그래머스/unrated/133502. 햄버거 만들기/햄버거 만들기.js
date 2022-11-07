function solution(ingredient) {
    let answer = 0;
    const burger = []
    for (let piece of ingredient) {
        if (piece === 1) {
            burger.push(piece);
            if (burger[burger.length - 2] === 3 && burger[burger.length - 3] === 2 && burger[burger.length - 4] === 1) {
                burger.splice(burger.length - 4, 4);
                answer++;
            }
        } else burger.push(piece);
        // else if (burger[burger.length - 1] === piece - 1) burger.push(piece);
    }
    return answer;
}