import { Canvas, useFrame } from "@react-three/fiber";
import * as React from "react";
import { useRef, useState } from "react";
import { OrbitControls, Float, Text, Stars } from "@react-three/drei";
import { Mesh, Color } from "three";

function Shapes() {
  const boxRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);
  const icosahedronRef = useRef<Mesh>(null);

  const [hovered, setHovered] = useState<number | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);
  const [spin, setSpin] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    if (torusRef.current) {
      torusRef.current.rotation.x = Math.sin(time * 0.2) * 0.4;
      torusRef.current.rotation.y = Math.sin(time * 0.4) * 0.3;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.2;
      torusRef.current.scale.setScalar(
        clicked === 0 ? 1.2 : hovered === 0 ? 1.1 : 1
      );

      if (spin && clicked === 0) {
        torusRef.current.rotation.z += 0.03;
      }
    }

    if (boxRef.current) {
      boxRef.current.rotation.y = time * 0.3;
      boxRef.current.rotation.z = time * 0.2;
      boxRef.current.position.y = Math.sin(time * 0.3) * 0.2 - 0.5;
      boxRef.current.position.x = Math.cos(time * 0.2) * 0.3;
      boxRef.current.scale.setScalar(
        clicked === 1 ? 1.2 : hovered === 1 ? 1.1 : 1
      );

      if (spin && clicked === 1) {
        boxRef.current.rotation.x += 0.03;
      }
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.y = time * 0.2;
      icosahedronRef.current.rotation.z = time * 0.3;
      icosahedronRef.current.position.y = Math.sin(time * 0.4) * 0.2 + 0.5;
      icosahedronRef.current.position.x = Math.sin(time * 0.3) * 0.3;
      icosahedronRef.current.scale.setScalar(
        clicked === 2 ? 1.2 : hovered === 2 ? 1.1 : 1
      );

      if (spin && clicked === 2) {
        icosahedronRef.current.rotation.x += 0.03;
      }
    }
  });

  // Professional color palette
  const primaryColor = new Color("#3b82f6");
  const accentColor = new Color("#4f46e5");
  const highlightColor = new Color("#38bdf8");

  const handleShapeClick = (index: number) => {
    const newClickState = clicked === index ? null : index;
    setClicked(newClickState);
    setSpin(newClickState !== null);
  };

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} />
      <spotLight
        position={[-10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />

      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        <mesh
          ref={torusRef}
          position={[0, 0, 0]}
          onPointerOver={() => setHovered(0)}
          onPointerOut={() => setHovered(null)}
          onClick={() => handleShapeClick(0)}
        >
          <torusGeometry args={[1.5, 0.5, 16, 60]} />
          <meshStandardMaterial
            color={hovered === 0 ? highlightColor : primaryColor}
            wireframe={hovered === 0}
            emissive={clicked === 0 ? accentColor : "black"}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      <mesh
        ref={boxRef}
        position={[0, -0.5, 0]}
        onPointerOver={() => setHovered(1)}
        onPointerOut={() => setHovered(null)}
        onClick={() => handleShapeClick(1)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered === 1 ? highlightColor : primaryColor}
          wireframe={hovered === 1}
          emissive={clicked === 1 ? accentColor : "black"}
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh
          ref={icosahedronRef}
          position={[0, 0.5, 0]}
          onPointerOver={() => setHovered(2)}
          onPointerOut={() => setHovered(null)}
          onClick={() => handleShapeClick(2)}
        >
          <icosahedronGeometry args={[0.8, 0]} />
          <meshStandardMaterial
            color={hovered === 2 ? highlightColor : primaryColor}
            wireframe={hovered === 2}
            emissive={clicked === 2 ? accentColor : "black"}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>

      {clicked !== null && (
        <Text
          position={[0, 2, 0]}
          color={accentColor}
          anchorX="center"
          anchorY="middle"
          fontSize={0.2}
        >
          {clicked === 0
            ? "Torus Selected"
            : clicked === 1
            ? "Cube Selected"
            : "Icosahedron Selected"}
        </Text>
      )}
    </>
  );
}

export function HeroScene() {
  return (
    <div className="w-full h-64 md:h-96">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        className="bg-transparent"
        style={{
          cursor: "grab",
          width: "100%",
          height: "100%",
        }}
        dpr={[1, 2]}
      >
        <Shapes />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
