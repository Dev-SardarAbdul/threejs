import React, { useEffect } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

function Fox() {
  const model = useGLTF("./Fox/glTF/Fox.gltf");
  const animation = useAnimations(model.animations, model.scene);

  const { animtionName } = useControls("fox", {
    animtionName: { options: animation.names },
  });

  useEffect(() => {
    animation.actions[animtionName].reset().fadeIn(0.5).play();

    return () => {
      animation.actions[animtionName].fadeOut(0.5);
    };
  }, [animtionName]);
  return <primitive object={model.scene} scale={0.03} position={[-3, -1, 0]} />;
}

export default Fox;
