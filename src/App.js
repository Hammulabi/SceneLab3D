import React from 'https://esm.sh/react@18.3.1';
import { Canvas } from 'https://esm.sh/@react-three/fiber@9.4.0';
import { OrbitControls } from 'https://esm.sh/@react-three/drei@10.7.4';

export default function App() {
  return React.createElement(
    Canvas,
    { camera: { position: [2.5, 2.5, 2.5], fov: 50 } },
    React.createElement('ambientLight', { intensity: 0.5 }),
    React.createElement('directionalLight', { position: [2, 2, 2], intensity: 1 }),
    React.createElement(
      'mesh',
      null,
      React.createElement('boxGeometry', { args: [1, 1, 1] }),
      React.createElement('meshStandardMaterial', { color: 'royalblue' }),
    ),
    React.createElement(OrbitControls),
  );
}