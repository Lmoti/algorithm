function solution(board) {
    const bomb = [];
    let safe = 0;
    const len = board.length;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) bomb.push([i, j]);
        }
    }
    for (let i of bomb) {
        const [x, y] = i;
        // 맨 윗줄일때 체크
        if (x !== 0) {
            board[x - 1][y] = 'X';
            // 모서리체크
            if (y !== 0) board[x - 1][y - 1] = 'X';
            if (y !== len - 1) board[x - 1][y + 1] = 'X';
        }
        // 맨 아랫줄일때 체크
        if (x !== len - 1) {
            board[x + 1][y] = 'X';
            // 모서리체크
            if (y !== 0) board[x + 1][y - 1] = 'X';
            if (y !== len - 1) board[x + 1][y + 1] = 'X';
        }
        // 맨 왼쪽일때 체크
        if (y !== 0) board[x][y - 1] = 'X';
        // 맨 오른쪽일때 체크
        if (y !== len - 1) board[x][y + 1] = 'X'
    }
    board.forEach((n) => n.forEach((m) => m === 0 ? safe++ : null));
    return safe;
}