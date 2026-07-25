"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { Mesh, Color, ShaderMaterial, Vector2 } from "three";

import vertex from "./shaders/vertex.glsl";
import fragment from "./shaders/fragment.glsl";

import { purple } from "@styles/palette";

import { useEffect, useRef, useMemo } from "react";

const pallete = purple.map((color) => new Color(color));

// Length of the cursor "wake" trail — must match TRAIL_LENGTH in fragment.glsl.
// Points are ordered newest-first (index 0 = freshest).
const TRAIL_LENGTH = 32;

function LampLava() {
  const state = useThree();

  const ref = useRef<Mesh>(null!);

  // Target cursor position in normalized [-1, 1] coords, tracked globally so it
  // works even though the canvas sits behind the page content (z-index: -1).
  const target = useRef(new Vector2(0.5, 0.5));
  // Smoothed cursor head in screen [0, 1] y-up coords.
  const head = useRef(new Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new Vector2(1, 1) },
      uColour: { value: pallete },
      uTrail: {
        value: Array.from({ length: TRAIL_LENGTH }, () => new Vector2(0.5, 0.5)),
      },
      uTrailStrength: { value: new Float32Array(TRAIL_LENGTH) },
    }),
    []
  );

  useFrame(({ clock, gl }) => {
    const material = ref.current.material as ShaderMaterial;
    material.uniforms.uTime.value = clock.getElapsedTime() * 0.01;

    // Match gl_FragCoord (physical drawing-buffer pixels).
    material.uniforms.uResolution.value.set(
      gl.domElement.width,
      gl.domElement.height
    );

    // Slowly fade every trail point -> the black gap heals and anomalies
    // flow back in.
    const strengths = material.uniforms.uTrailStrength.value as Float32Array;
    for (let i = 0; i < TRAIL_LENGTH; i++) strengths[i] *= 0.96;

    // Smoothly chase the cursor (target is [-1,1] y-up -> [0,1] screen).
    const tx = target.current.x * 0.5 + 0.5;
    const ty = target.current.y * 0.5 + 0.5;
    head.current.x += (tx - head.current.x) * 0.18;
    head.current.y += (ty - head.current.y) * 0.18;

    // Drop a fresh point at the front once the head has travelled far enough.
    // Newest-first ordering keeps neighbouring indices contiguous in time so
    // the shader can join them into one continuous trail (no gaps / ticks).
    const trail = material.uniforms.uTrail.value as Vector2[];
    const dx = head.current.x - trail[0].x;
    const dy = head.current.y - trail[0].y;
    if (Math.hypot(dx, dy) > 0.01) {
      for (let i = TRAIL_LENGTH - 1; i > 0; i--) {
        trail[i].copy(trail[i - 1]);
        strengths[i] = strengths[i - 1];
      }
      trail[0].copy(head.current);
      strengths[0] = 1.0;
    }
  });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      target.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );
    };

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  useEffect(() => {
    state.camera.position.set(0, 0, 1.7);
  }, [state]);

  return (
    <mesh ref={ref}>
      <planeGeometry args={[8, 8, 2, 2]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertex}
        fragmentShader={fragment}
      />
    </mesh>
  );
}

export default LampLava;
