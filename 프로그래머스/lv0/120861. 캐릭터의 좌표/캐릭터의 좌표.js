function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    for (let key of keyinput) {
        if (key === 'up') {
            if (y < Math.floor(board[1] / 2)) y++;
        } else if (key === 'down') {
            if (y > -Math.floor(board[1] / 2)) y--;
        } else if (key === 'right') {
            if (x < Math.floor(board[0] / 2)) x++;
        } else if (key === 'left') {
            if (x > -Math.floor(board[0] / 2)) x--; 
        }
    }
    return [x, y];
}