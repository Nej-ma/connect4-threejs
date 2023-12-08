import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
import Board from './components/board';

function App() {
  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Physics>
        <Board />
      </Physics>
      <OrbitControls target={[0, 1, 0]} />
      <Environment preset="dawn" background blur={0.5} />
    </Canvas>
  );
}

export default App;
