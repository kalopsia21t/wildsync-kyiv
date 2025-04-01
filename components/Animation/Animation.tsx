"use client";
import { Canvas } from "@react-three/fiber";

import { Stats, OrbitControls } from "@react-three/drei";

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
