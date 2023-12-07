import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Board from './components/board';

function App() {
  const [hdrLoaded, setHdrLoaded] = useState(true);

  useEffect(() => {
    fetch('../public/assets/basement_boxing_ring_8k.hdr')
      .then((response) => {
        if (!response.ok) {
          throw new Error('HDR file not found');
        }
        setHdrLoaded(true);
      })
      .catch((error) => {
        console.error('Error loading HDR:', error);
        setHdrLoaded(false);
      });
  }, []);

  return (
    <Canvas camera={{ position: [-0.5, 1, 2] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Board />
      <OrbitControls target={[0, 1, 0]} />
      {hdrLoaded ? (
        <Environment files='../public/assets/basement_boxing_ring_8k.hdr' background blur={0.5} />
      ) : (
        <Environment background='red' blur={0.5} />
      )}
    </Canvas>
  );
}

export default App;
