import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import MainModel from "./mainModel";
import Fox from "./fox";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Suspense
        fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial color={"red"} wireframe />
          </mesh>
        }
      >
        <Fox />
      </Suspense>

      <Suspense
        fallback={
          <mesh>
            <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
            <meshBasicMaterial color={"red"} wireframe />
          </mesh>
        }
      >
        <MainModel />
      </Suspense>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
