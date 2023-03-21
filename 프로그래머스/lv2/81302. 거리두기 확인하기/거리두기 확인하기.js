function solution(places) {
    const answer = [];
    for (let i = 0; i < places.length; i++) {
        const room = places[i];
        let check = true;
        for (let j = 0; j < room.length; j++) {
            for (let k = 0; k < room[j].length; k++) {
                if (room[j][k] === 'P') {
                    // 모서리체크
                    if (j !== 0 && k !== 0 && room[j - 1][k - 1] === 'P') {
                        if (room[j - 1][k] !== 'X' || room[j][k - 1] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (j !== 0 && k !== 4 && room[j - 1][k + 1] === 'P') {
                        if (room[j - 1][k] !== 'X' || room[j][k + 1] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (j !== 4 && k !== 0 && room[j + 1][k - 1] === 'P') {
                        if (room[j][k - 1] !== 'X' || room[j + 1][k] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (j !== 4 && k !== 4 && room[j + 1][k + 1] === 'P') {
                        if (room[j][k + 1] !== 'X' || room [j + 1][k] !== 'X') {
                            check = false;
                            break;
                        }
                    }
                    // 동서남북 체크
                    if (j !== 0 && room[j - 1][k] === 'P') {
                        check = false;
                        break;
                    } else if (k !== 4 && room[j][k + 1] === 'P') {
                        check = false;
                        break;
                    } else if (j !== 4 && room[j + 1][k] === 'P') {
                        check = false;
                        break;
                    } else if (k !== 0 && room[j][k - 1]  === 'P') {
                        check = false;
                        break;
                    }
                    if (j > 1 && room[j - 2][k] === 'P') {
                        if (room[j - 1][k] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (k < 3 && room[j][k + 2] === 'P') {
                        if (room[j][k + 1] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (j < 3 && room[j + 2][k] === 'P') {
                        if (room[j + 1][k] !== 'X') {
                            check = false;
                            break;
                        }
                    } else if (k > 1 && room[j][k - 2] === 'P') {
                        if (room[j][k - 1] !== 'X') {
                            check = false;
                            break;
                        }
                    }
                }
            }
            if (!check) break;
        }
        answer.push(check ? 1 : 0);
    }
    return answer;
}