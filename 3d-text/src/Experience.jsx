import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { useRef, useState } from "react";

export default function Experience() {
  const [torusGeometry, setTorusGeometry] = useState();
  const [material, setMaterial] = useState();

  const [matcap] = useMatcapTexture("3E2335_D36A1B_8E4A2E_2842A5", 256);

  const groupRef = useRef();

  useFrame((state, delta) => {
    for (const donut of groupRef.current.children) {
      donut.rotation.y += delta * 0.2;
    }
  });

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      <torusGeometry ref={setTorusGeometry} />
      <meshMatcapMaterial matcap={matcap} ref={setMaterial} />

      <group ref={groupRef}>
        {[...Array(100)].map((_, index) => (
          <mesh
            geometry={torusGeometry}
            material={material}
            key={index}
            position={[
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
              (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          />
        ))}
      </group>

      <Center>
        <Text3D
          font={"./fonts/helvetiker_regular.typeface.json"}
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          material={material}
        >
          Hello World
          <meshMatcapMaterial matcap={matcap} />
        </Text3D>
      </Center>
    </>
  );
}
