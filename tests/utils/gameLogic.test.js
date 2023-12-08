import { checkWin, checkDraw, ROWS, COLUMNS, EMPTY, PLAYER1, PLAYER2 } from '../../src/utils/gameLogic';

describe('Game Logic Tests', () => {
    let board;

    beforeEach(() => {
        board = Array.from({ length: ROWS }, () => Array.from({ length: COLUMNS }, () => EMPTY));
    });

    const fillBoard = (player) => {
        for (let row = 0; row < ROWS; row++) {
            for (let col = 0; col < COLUMNS; col++) {
                board[row][col] = player;
            }
        }
    };

    test('checkWin should detect a horizontal win', () => {
        for (let i = 0; i < 4; i++) {
            board[ROWS - 1][i] = PLAYER1;
        }
        expect(checkWin(board, ROWS - 1, 3, PLAYER1)).toBe(true);
    });

    test('checkWin should detect a vertical win', () => {
        for (let i = 0; i < 4; i++) {
            board[i][0] = PLAYER1;
        }
        expect(checkWin(board, 3, 0, PLAYER1)).toBe(true);
    });

    test('checkWin should detect a diagonal down-right win', () => {
        for (let i = 0; i < 4; i++) {
            board[i][i] = PLAYER1;
        }
        expect(checkWin(board, 3, 3, PLAYER1)).toBe(true);
    });

    test('checkWin should detect a diagonal down-left win', () => {
        for (let i = 0; i < 4; i++) {
            board[i][COLUMNS - 1 - i] = PLAYER1;
        }
        expect(checkWin(board, 3, COLUMNS - 4, PLAYER1)).toBe(true);
    });

    test('checkDraw should return true when the board is full and no player has won', () => {
        fillBoard(PLAYER1);
        expect(checkDraw(board)).toBe(true);
    });

    test('checkDraw should return false when there are empty cells', () => {
        fillBoard(PLAYER1);
        board[0][0] = EMPTY;
        expect(checkDraw(board)).toBe(false);
    });

    test('checkDraw should return false when a player has won', () => {
        for (let i = 0; i < 4; i++) {
            board[i][0] = PLAYER1;
        }
        expect(checkDraw(board)).toBe(false);
    });
});
