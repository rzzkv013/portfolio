"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Octahedron, Torus } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import type { Group, Mesh, PointLight } from "three";

function SceneObjects() {
  const group = useRef<Group>(null);
  const light = useRef<PointLight>(null);
  const cube = useRef<Mesh>(null);
  const ring = useRef<Mesh>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      pointerTarget.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.current.y = 1 - (event.clientY / window.innerHeight) * 2;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y += (pointerTarget.current.x * 0.16 - group.current.rotation.y) * 0.025;
      group.current.rotation.x += (-pointerTarget.current.y * 0.12 - group.current.rotation.x) * 0.025;
    }
    if (light.current) {
      light.current.position.x += (pointerTarget.current.x * 3 - light.current.position.x) * 0.035;
      light.current.position.y += (pointerTarget.current.y * 2 - light.current.position.y) * 0.035;
    }
    if (cube.current) cube.current.rotation.y = elapsed * 0.12;
    if (ring.current) ring.current.rotation.x = elapsed * 0.1;
  });

  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight ref={light} position={[2, 1, 3]} intensity={7} color="#dfe6f2" />
      <group ref={group}>
        <Float speed={1} rotationIntensity={0.12} floatIntensity={0.2}>
          <mesh ref={cube} position={[2.35, 0.08, -0.3]}>
            <boxGeometry args={[1.25, 1.25, 1.25]} />
            <meshStandardMaterial color="#c8d1df" wireframe transparent opacity={0.36} />
          </mesh>
        </Float>
        <Float speed={1.25} rotationIntensity={0.3} floatIntensity={0.35}>
          <Octahedron args={[0.86, 0]} position={[-2.35, -0.22, 0]}>
            <meshStandardMaterial color="#d8deea" wireframe transparent opacity={0.42} />
          </Octahedron>
        </Float>
        <Float speed={0.8} rotationIntensity={0.18} floatIntensity={0.4}>
          <Torus ref={ring} args={[1.05, 0.008, 12, 96]} position={[0.1, -1.25, -0.6]}>
            <meshStandardMaterial color="#d8deea" transparent opacity={0.45} />
          </Torus>
        </Float>
      </group>
    </>
  );
}

export default function Scene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7], fov: 38 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <SceneObjects />
        </Suspense>
      </Canvas>
      <div className="scene-symbols">
        <span className="scene-symbol scene-symbol-code">&lt;/&gt;</span>
        <span className="scene-symbol scene-symbol-braces">{"{ }"}</span>
        <span className="scene-symbol scene-symbol-small scene-symbol-const">const</span>
        <span className="scene-symbol scene-symbol-small scene-symbol-fn">fn()</span>
      </div>
    </div>
  );
}
