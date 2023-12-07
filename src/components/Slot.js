// src/components/Slot.js
import React from 'react';

const Slot = ({ slotIndex }) => {
  return (
    <mesh position={[0, slotIndex - 2.5, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry attach="geometry" args={[0.45, 0.45, 0.3, 32]} />
      <meshStandardMaterial attach="material" color="white" transparent opacity={0.5} />
    </mesh>
  );
};

export default Slot;
