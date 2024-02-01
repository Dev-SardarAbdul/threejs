import React from "react";
import { useGLTF } from "@react-three/drei";

function MainModel() {
  const model = useGLTF("./hamburger-draco.glb");

  return <primitive object={model.scene} scale={0.25} position={[1, -1, 0]} />;
}

export default MainModel;
