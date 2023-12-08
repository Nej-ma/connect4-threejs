import React from 'react';

const BoardFrame = () => {
    return (
        <group>
            <mesh position={[0, 0, -0.1]}>
                <boxGeometry attach="geometry" args={[7, 6, 0.5]} />
                <meshStandardMaterial attach="material" color="blue" />
            </mesh>
            <mesh position={[0, -3, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <boxGeometry attach="geometry" args={[7.2, 4.2, 0.1]} />
                <meshStandardMaterial attach="material" color="brown" />
            </mesh>
            <mesh position = {[0, 3, -0.1]} >
                <boxGeometry attach="geometry" args={[6.8, 0.01, 0.2]} />
                <meshStandardMaterial attach="material" color="black" transparent opacity={0.5} />
            </mesh>
        </group>
    );
};

export default BoardFrame;
