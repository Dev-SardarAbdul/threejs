import React from "react";
import Solar from "./Solar";
import Office from "./Office";
import { OrbitControls } from "@react-three/drei";

function Experience() {
  return (
    <>
      <ambientLight intensity={1} />
      <OrbitControls />
      <Solar />
    </>
  );
}

export default Experience;
