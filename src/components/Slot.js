import React from 'react';

const Slot = ({ slotIndex, state }) => {
    const color = state === 'X' ? 'red' : state === 'Y' ? 'yellow' : 'white';
    //opacity is 0.5 if the slot is empty, 1 if it is filled
    const opacity = state === 'O' ? 0.5 : 1;

    return (
        <mesh position={[0, 2.5-slotIndex, -0.1]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry attach="geometry" args={[0.45, 0.45, 0.7, 32]} />
            <meshStandardMaterial attach="material" color={color} transparent={state === 'O'} opacity={opacity} />
        </mesh>
    );
};

export default Slot;
