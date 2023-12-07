// src/components/BoardFrame.js
import React from 'react';

const BoardFrame = () => {
  return (
    <mesh position={[0, 0, -0.1]}>
      <boxGeometry attach="geometry" args={[7, 6, 0.2]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  );
};

export default BoardFrame;
