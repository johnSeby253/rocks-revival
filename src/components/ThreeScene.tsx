"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";

function WatchModel() {
  const { scene } = useGLTF("/model/watch.glb");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <primitive
      object={scene}
      scale={isMobile ? 0.35 : 0.5}          // 👈 smaller on mobile
      position={[0, isMobile ? 0.3 : 0.6, 0]} // 👈 adjust vertical position
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

export default function WatchScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0, 4],
        fov: 45,
      }}
    >
      {/* Soft global light */}
      <ambientLight intensity={0.3} />

      {/* Center soft gold light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={1}
        color="#E6C87A"
      />

      {/* Rim light */}
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Back light */}
      <directionalLight position={[-5, -3, -5]} intensity={0.6} />

      <WatchModel />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6} // smoother on mobile
      />
    </Canvas>
  );
}
