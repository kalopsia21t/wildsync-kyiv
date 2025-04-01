"use client";
import { Canvas } from "@react-three/fiber";

import LampLava from "./LampLava";

function Animation() {
  return (
    <>
      <Canvas>
        <LampLava />
        {/* <OrbitControls /> */}
        {/* <Stats /> */}
      </Canvas>
    </>
  );
}

export default Animation;
