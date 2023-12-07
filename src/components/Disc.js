// src/components/Disc.js
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const Disc = ({ position, color }) => {
  return (
    <mesh position={position}>
      <cylinderBufferGeometry attach="geometry" args={[0.4, 0.4, 0.1, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
};

export default Disc;
