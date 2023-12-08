// gameLogic.js
export const ROWS = 6;
export const COLUMNS = 7;
export const EMPTY = 'O';
export const PLAYER1 = 'X';
export const PLAYER2 = 'Y';

export function createBoard() {
    let board = [];
    for (let i = 0; i < ROWS; i++) {
        board.push(Array(COLUMNS).fill(EMPTY));
    }
    return board;
}

export function addDiscToColumn(board, column, player) {
    if (column < 0 || column >= COLUMNS) {
        throw new Error('Column out of bounds');
    }

    for (let row = ROWS - 1; row >= 0; row--) {
        if (board[row][column] === EMPTY) {
            board[row][column] = player;
            return { row, column };
        }
    }

    throw new Error('Column is full');
}

export function checkWin(board, lastMove) {
    // Check horizontal, vertical, and diagonal wins
    // Return PLAYER1, PLAYER2, or null
    return checkLine(board, lastMove, 0, 1) ||  // Horizontal
           checkLine(board, lastMove, 1, 0) ||  // Vertical
           checkLine(board, lastMove, 1, 1) ||  // Diagonal (down-right)
           checkLine(board, lastMove, 1, -1);   // Diagonal (down-left)
}

function checkLine(board, lastMove, deltaRow, deltaCol) {
    let count = 0;
    for (let i = -3; i <= 3; i++) {
        const r = lastMove.row + i * deltaRow;
        const c = lastMove.column + i * deltaCol;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS && board[r][c] === lastMove.player) {
            count++;
            if (count === 4) return lastMove.player;
        } else {
            count = 0;
        }
    }
    return null;
}

export function checkDraw(board) {
    return board.every(row => row.every(cell => cell !== EMPTY));
}

