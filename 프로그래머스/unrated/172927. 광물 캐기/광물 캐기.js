function solution(picks, minerals) {
    let answer = 0;
    const totalPick = picks.reduce((a, b) => a + b, 0);
    const num = Math.floor(minerals.length / 5);
    let arr = [];
    for (let i = 0; i < totalPick; i++) {
        arr.push(minerals.slice(i * 5, (i + 1) * 5));
    }
    arr.sort((a, b) => {
        const adia = a.filter((el) => el === 'diamond').length;
        const bdia = b.filter((el) => el === 'diamond').length;
        const airon = a.filter((el) => el === 'iron').length;
        const biron = b.filter((el) => el === 'iron').length;
        if (adia === bdia) return biron - airon;
        return bdia - adia;
    })
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (picks[0] >= 1) {
                answer += arr[i].length;
                break;
            } else if (picks[1] >= 1) {
                if (arr[i][j] === 'diamond') {
                    answer += 5;
                } else {
                    answer++;
                }
            } else if (picks[2] >= 1) {
                switch (arr[i][j]) {
                    case 'diamond':
                        answer += 25;
                        break;
                    case 'iron':
                        answer += 5;
                        break;
                    case 'stone':
                        answer++;
                        break;
                    default: break;
                }
            }
        }
        picks[0] >= 1 ? picks[0]-- : picks[1] >= 1 ? picks[1]-- : picks[2]--;
    }
    return answer;
}