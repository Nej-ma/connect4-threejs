const { createBoard, addDiscToColumn, checkWin, checkDraw, PLAYER1, PLAYER2, EMPTY } = require('../../src/utils/gameLogic');

describe('Game Logic Tests', () => {
    let board;

    beforeEach(() => {
        board = createBoard();
    });

    test('createBoard should create a 7x6 board filled with EMPTY', () => {
        expect(board.length).toBe(6);
        expect(board[0].length).toBe(7);
        board.forEach(row => {
            row.forEach(cell => {
                expect(cell).toBe(EMPTY);
            });
        });
    });

    test('addDiscToColumn should add a disc to the correct column', () => {
        addDiscToColumn(board, 3, PLAYER1);
        expect(board[5][3]).toBe(PLAYER1);
    });

    test('checkWin should detect a horizontal win', () => {
        for (let i = 0; i < 4; i++) {
            addDiscToColumn(board, i, PLAYER1);
        }
        expect(checkWin(board, { row: 5, column: 3, player: PLAYER1 })).toBe(PLAYER1);
    });

    test('checkWin should detect a vertical win', () => {
        for (let i = 0; i < 4; i++) {
            addDiscToColumn(board, 0, PLAYER1);
        }
        expect(checkWin(board, { row: 2, column: 0, player: PLAYER1 })).toBe(PLAYER1);
    });

    test('checkWin should detect a diagonal win', () => {
        // Set up a diagonal from bottom left to top right
        for (let i = 0; i < 4; i++) {
            // Add discs for the opposing player to create space for the diagonal
            for (let j = 0; j < i; j++) {
                addDiscToColumn(board, i, PLAYER2);
            }
            // Add the disc for the testing player
            addDiscToColumn(board, i, PLAYER1);
        }
        expect(checkWin(board, { row: 2, column: 3, player: PLAYER1 })).toBe(PLAYER1);
    });
    

    test('checkDraw should return true when the board is full and there is no winner', () => {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                addDiscToColumn(board, col, row % 2 === 0 ? PLAYER1 : PLAYER2);
            }
        }
        expect(checkDraw(board)).toBeTruthy();
    });
});
