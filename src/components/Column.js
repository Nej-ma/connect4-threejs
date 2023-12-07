// src/components/Column.js
import React from 'react';
import Slot from './Slot';

function Column({ columnIndex }) {
  const slots = [];
  for (let i = 0; i < 6; i++) {
    slots.push(<Slot key={i} slotIndex={i} />);
  }

  return (
    <group position={[columnIndex - 3, 0, 0]}>
      {slots}
    </group>
  );
}

export default Column;
