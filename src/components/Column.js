import React from 'react';
import Slot from './Slot';

function Column({ columnIndex, onClick, board }) {
    return (
        <group position={[columnIndex - 3, 0, 0]} onClick={onClick}>
            {board.map((row, rowIndex) => (
                <Slot key={`${columnIndex}-${rowIndex}`} slotIndex={rowIndex} columnIndex={columnIndex} state={row[columnIndex]} />
            ))}
        </group>
    );
}

export default Column;
