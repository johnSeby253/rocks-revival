"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function WatchModel() {
  const { scene } = useGLTF("/model/watch.glb");

  return (
    <primitive
      object={scene}
      scale={0.5}
       position={[0, 0.6, 0]} 
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function WatchScene() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      {/* Soft global light */}
<ambientLight intensity={0.3} />

<pointLight
  position={[0, 0, 0]}
  intensity={1}
  color="#E6C87A"
/>


      {/* Rim / highlight light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1}
      />

      {/* Back light for depth */}
      <directionalLight
        position={[-5, -3, -5]}
        intensity={0.6}
      />

      <WatchModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}
