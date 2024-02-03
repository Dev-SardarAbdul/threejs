import {
  Center,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb");

  const texture = useTexture("./model/baked.jpg");

  console.log(nodes);

  return (
    <>
      <color args={["#030510"]} attach={"background"} />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={texture} map-flipY={false} />
        </mesh>

        <mesh
          position={nodes.poleLightA.position}
          geometry={nodes.poleLightA.geometry}
        >
          <meshBasicMaterial color={"#D0B542"} />
        </mesh>

        <mesh
          position={nodes.poleLightB.position}
          geometry={nodes.poleLightB.geometry}
        >
          <meshBasicMaterial color={"#D0B542"} />
        </mesh>
        <mesh
          position={nodes.portalLight.position}
          geometry={nodes.portalLight.geometry}
          rotation={nodes.portalLight.rotation}
        >
          <meshBasicMaterial color={"#ffffff"} />
        </mesh>

        <Sparkles size={5} scale={[3, 3, -2]} position-y={1} speed={0.75} />
      </Center>
    </>
  );
}
