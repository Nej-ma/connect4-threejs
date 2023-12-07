// src/components/Board.js
import React from 'react';
import Column from './Column';
import BoardFrame from './BoardFrame';

function Board() {
  const columns = [];
  for (let i = 0; i < 7; i++) {
    columns.push(<Column key={i} columnIndex={i} />);
  }

  return (
    <group>
      <BoardFrame />
      {columns}
    </group>
  );
}

export default Board;
