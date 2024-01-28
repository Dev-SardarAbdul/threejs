import React from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/Addons";

function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();

  extend({ OrbitControls });

  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight />
      <group ref={groupRef}>
        <mesh position-x={2} ref={cubeRef}>
          <boxGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>

        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color={"orange"} />
        </mesh>
      </group>
      <mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
        <planeGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </>
  );
}

export default Experience;
