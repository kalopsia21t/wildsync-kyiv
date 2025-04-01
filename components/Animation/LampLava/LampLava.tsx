"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Mesh, Color } from "three";

import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

import { useEffect, useRef, useMemo } from "react";

const silver = ["#e9ecef", "#dee2e6", "#adb5bd", "#495057", "#343a40"];
const green = ["#ccff33", "#9ef01a", "#70e000", "#38b000", "#38b000"];

const pallete = green.map((color) => new Color(color));

function LampLava() {
  const state = useThree();

  const ref = useRef<Mesh>(null!);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColour: {
        value: pallete,
      },
    }),
    [pallete]
  );

  useFrame(({ clock, gl, scene, camera, invalidate }) => {
    ref.current.material.uniforms.uTime.value = clock.getElapsedTime() * 0.01;
  });

  useEffect(() => {
    state.camera.position.set(0, 0, 1.7);
  }, [state]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[8, 8, 512, 512]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}

export default LampLava;
