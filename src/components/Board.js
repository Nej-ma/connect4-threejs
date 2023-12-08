import React, { useState, useEffect } from 'react';
import Column from './Column';
import BoardFrame from './BoardFrame';
import { checkWin, checkDraw, ROWS, COLUMNS, EMPTY, PLAYER1, PLAYER2 } from '../utils/gameLogic';

function Board() {
    const [board, setBoard] = useState(createInitialBoard());
    const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        if (winner) {
            alert(`Game Over. Winner: ${winner}`);
        }
    }, [winner]);

    function createInitialBoard() {
        return Array.from({ length: ROWS }, () => Array.from({ length: COLUMNS }, () => EMPTY));
    }

    function handleColumnClick(columnIndex) {
        if (winner) return; // Do nothing if the game is over

        const newBoard = board.map(row => [...row]);
        for (let row = ROWS - 1; row >= 0; row--) {
            if (newBoard[row][columnIndex] === EMPTY) {
                newBoard[row][columnIndex] = currentPlayer;
                setBoard(newBoard);

                if (checkWin(newBoard, row, columnIndex, currentPlayer)) {
                    setWinner(currentPlayer);
                } else if (checkDraw(newBoard)) {
                    setWinner('Draw');
                } else {
                    setCurrentPlayer(currentPlayer === PLAYER1 ? PLAYER2 : PLAYER1);
                }
                break;
            }
        }
    }

    return (
        <group>
            <BoardFrame />
            {Array.from({ length: COLUMNS }, (_, columnIndex) => (
                <Column key={columnIndex} columnIndex={columnIndex} board={board} onClick={() => handleColumnClick(columnIndex)} />
            ))}
        </group>
    );
}

export default Board;
