// Constants for the game
const ROWS = 6;
const COLUMNS = 7;
const EMPTY = 'O';
const PLAYER1 = 'X';
const PLAYER2 = 'Y';
const DRAW = 'DRAW';

// Function to create an empty game board
function createBoard() {
    let board = [];
    for (let i = 0; i < ROWS; i++) {
        board[i] = [];
        for (let j = 0; j < COLUMNS; j++) {
            board[i][j] = EMPTY;
        }
    }
    return board;
}

// Function to add a disc to the board
function addDiscToColumn(board, column, player) {
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

// Function to check for a win
function checkWin(board, lastMove) {
    // Implement the logic to check for 4 in a row (horizontally, vertically, diagonally)
    // This function should return PLAYER1, PLAYER2, or null
    //check horizontal
    let count = 0;
    for (let i = 0; i < COLUMNS; i++) {
        if (board[lastMove.row][i] === lastMove.player) {
            count++;
            if (count === 4) {
                return lastMove.player;
            }
        } else {
            count = 0;
        }
    }
    //check vertical
    count = 0;
    for (let i = 0; i < ROWS; i++) {
        if (board[i][lastMove.column] === lastMove.player) {
            count++;
            if (count === 4) {
                return lastMove.player;
            }
        } else {
            count = 0;
        }
    }
    // Check diagonal (top-left to bottom-right)
    count = 0;
    for (let i = 0; i < ROWS; i++) {
        let r = lastMove.row + i - 3;
        let c = lastMove.column + i - 3;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS) {
            if (board[r][c] === lastMove.player) {
                count++;
                if (count === 4) return lastMove.player;
            } else {
                count = 0;
            }
        }
    }

    // Check anti-diagonal (bottom-left to top-right)
    count = 0;
    for (let i = 0; i < ROWS; i++) {
        let r = lastMove.row - i + 3;
        let c = lastMove.column + i - 3;
        if (r >= 0 && r < ROWS && c >= 0 && c < COLUMNS) {
            if (board[r][c] === lastMove.player) {
                count++;
                if (count === 4) return lastMove.player;
            } else {
                count = 0;
            }
        }
    }

    return null;
}

// Function to check for a draw
function checkDraw(board) {
    // Implement the logic to check if the board is full and no player has won
    // This function should return true or false
    for (let i = 0; i < COLUMNS; i++) {
        if (board[0][i] === EMPTY) {
            return false;
        }
    }
    return true;
}

module.exports = { createBoard, addDiscToColumn, checkWin, checkDraw, PLAYER1, PLAYER2, DRAW, EMPTY };
