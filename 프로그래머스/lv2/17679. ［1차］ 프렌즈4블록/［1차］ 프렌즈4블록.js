// function solution(m, n, board) {
//     let result = [];
//     board = board.map((el) => el.split(''));
//     while (true) {
//         const set = new Set();
//         const len = result.length;
//         for (let i = 0; i < m - 1; i++) {
//             for (let j = 0; j < n - 1; j++) {
//                 const k = board[i][j];
//                 if (k !== '' && k === board[i][j + 1] && k === board[i + 1][j] && k === board[i + 1][j + 1]) {
//                     set.add('' + i + j);
//                     set.add('' + i + (j + 1));
//                     set.add('' + (i + 1) + j);
//                     set.add('' + (i + 1) + (j + 1));
//                 }
//             }
//         }
//         result = [...result, ...set];
//         if (len === result.length) break;
//         for (let num of [...set]) {
//             board[+num[0]][+num[1]] = '';
//         }
//         for (let i = 0; i < n; i++) {
//             for (let j = m - 2; j >= 0; j--) {
//                 if (board[j][i] === '') {
//                     for (let k = j - 1; k >= 0; k--) {
//                         if (board[k][i] !== '') {
//                             board[j][i] = board[k][i];
//                             board[k][i] = '';
//                             break;
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     return result.length;
// }

function solution(m, n, board) {
    let prev = -1;
    let answer = 0;
    board = board.map((el) => el.split(""));
    const isVisited = Array.from({length: m}, () => new Array(n).fill(1));
    
    while(prev !== answer) {
        prev = answer;
        let removed = [];
        
        for(let i = 0; i < m - 1; i++) {
            let cur = board[i];
            let next = board[i + 1];
            for(let j = 0; j < n - 1; j++) {
                if(cur[j] === cur[j + 1] && cur[j] === next[j] && cur[j] === next [j + 1]) {
                    answer += isVisited[i][j];
                    answer += isVisited[i][j + 1];
                    answer += isVisited[i + 1][j];
                    answer += isVisited[i + 1][j + 1];
                    
                    if(isVisited[i][j]) removed.push([i, j]);
                    if(isVisited[i][j + 1]) removed.push([i, j + 1]);
                    if(isVisited[i + 1][j]) removed.push([i + 1, j]);
                    if(isVisited[i + 1][j + 1]) removed.push([i + 1, j + 1]);

                    isVisited[i][j] = 0;
                    isVisited[i][j + 1] = 0;
                    isVisited[i + 1][j] = 0;
                    isVisited[i + 1][j + 1] = 0;
                }
            }            
        }
        
        for(let i = 0; i < removed.length; i++) {
            let el = removed[i];
            board[el[0]][el[1]] = "";
        }
            
        if(answer !== prev) {
            for(let i = board.length - 1; i >= 0; i--) {
                let temp = board[i];
                for(let j = 0; j < temp.length; j++) {
                    if(temp[j] === "") {
                        for(let k = i - 1; k >=0; k--) {
                            if(board[k][j] !== "") {
                                temp[j] = board[k][j];
                                board[k][j] = "";
                                    
                                isVisited[i][j] = isVisited[k][j];
                                isVisited[k][j] = 0;
                                    
                                break;
                            }
                        }
                    }
                }
            }
        }
    } 
    return answer;
}