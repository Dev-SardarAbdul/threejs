import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Solar(props) {
  const { nodes, materials } = useGLTF("./models/solar.glb");

  const texture = useTexture("./solar.png");

  return (
    <group {...props} dispose={null}>
      <group
        position={[-3.454, 0, 0]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.191}
      >
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials.initialShadingGroup}
        ></mesh>
      </group>

      <mesh
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[0.924, 5.18, -1.063]}
        rotation={[0.061, 0, 0]}
      ></mesh>

      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials["Material.002"]}
        position={[0.924, 5.18, -1.063]}
        rotation={[0.061, 0, 0]}
      >
        <meshBasicMaterial map={texture} map-flipY={false} />
      </mesh>
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.003"]}
        position={[0.924, 4.98, -1.076]}
        rotation={[0.061, 0, 0]}
        scale={[0.166, 0.592, 0.166]}
      ></mesh>
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials["Material.003"]}
        position={[0.945, 5.551, -1.092]}
        rotation={[0.061, 0, 0]}
        scale={0.111}
      ></mesh>
    </group>
  );
}

useGLTF.preload("./models/solar.glb");
