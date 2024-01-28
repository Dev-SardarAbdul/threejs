import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  OrbitControls,
  PivotControls,
  TransformControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";

function Experience() {
  const cubeRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight intensity={5} />
      <ambientLight intensity={2} />
      <group>
        <PivotControls
          anchor={[0, 0, 0]}
          fixed={true}
          scale={100}
          depthTest={false}
        >
          <mesh position-x={2} ref={cubeRef}>
            <boxGeometry />
            <meshStandardMaterial color={"black"} />
          </mesh>
        </PivotControls>

        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color={"orange"} />
          <Html center position={[1, 1, 0]} occlude="blending">
            This is a text
          </Html>
        </mesh>
        <TransformControls object={sphereRef} />
      </group>
      <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        {/* <meshStandardMaterial color={"green"} /> */}
        <MeshReflectorMaterial
          color={"green"}
          blur={[1000, 1000]}
          mixBlur={0.5}
          resolution={1024}
        />
      </mesh>

      <Float speed={10}>
        <Text position-y={3} color={"green"} maxWidth={4} textAlign="center">
          I Love R3R
        </Text>
      </Float>
    </>
  );
}

export default Experience;
