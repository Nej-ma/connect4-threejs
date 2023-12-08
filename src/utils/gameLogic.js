export const ROWS = 6;
export const COLUMNS = 7;
export const EMPTY = 'O';
export const PLAYER1 = 'X';
export const PLAYER2 = 'Y';

export function checkWin(board, row, column, player) {
    // Check for win in all directions
    return checkDirection(board, row, column, player, 0, 1) || // Horizontal
           checkDirection(board, row, column, player, 1, 0) || // Vertical
           checkDirection(board, row, column, player, 1, 1) || // Diagonal Down-Right
           checkDirection(board, row, column, player, 1, -1);   // Diagonal Down-Left
}

function checkDirection(board, row, column, player, deltaRow, deltaCol) {
    let count = 0;
    for (let i = -3; i <= 3; i++) {
        const r = row + i * deltaRow;
        const c = column + i * deltaCol;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS && board[r][c] === player) {
            count++;
            if (count === 4) return true;
        } else {
            count = 0;
        }
    }
    return false;
}

export function checkDraw(board) {
    return board.every(row => row.every(cell => cell !== EMPTY));
}
