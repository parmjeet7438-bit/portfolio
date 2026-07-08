"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Sphere } from "@react-three/drei";
import type { Group } from "three";

function CoreMesh() {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    groupRef.current.rotation.y = t * 0.15;
    groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.12;
  });

  return (
    <group ref={groupRef}>
        <Icosahedron args={[1.25, 0]}>
          <meshBasicMaterial
            wireframe
            color="#818cf8"
            transparent
            opacity={0.24}
          />
        </Icosahedron>
        <Sphere args={[0.5, 24, 24]}>
          <meshStandardMaterial
            color="#6366f1"
            emissive="#312e81"
            emissiveIntensity={0.4}
            metalness={0.6}
            roughness={0.35}
          />
        </Sphere>
    </group>
  );
}

interface AethericCoreSceneProps {
  active?: boolean;
}

export default function AethericCoreScene({ active = true }: AethericCoreSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      dpr={1}
      frameloop={active ? "always" : "never"}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[3, 3, 3]} intensity={0.9} color="#818cf8" />
      <CoreMesh />
    </Canvas>
  );
}
