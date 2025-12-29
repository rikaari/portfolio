import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Stars = ({
  count = 400,
  radius = 8,          // horizontal spread
  heightMin = 2,       // lowest y
  heightMax = 12,      // highest y
  baseSize = 0.06,
  twinkleSpeed = 1.5,
  color = "#ffffff",
}) => {
  const pointsRef = useRef();

  // Precompute positions, colors and per-star phase/speed
  const { positions, colors, phases, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const phases = new Float32Array(count);
    const speeds = new Float32Array(count);
    const base = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
      // spread across X,Z within radius, Y between heightMin and heightMax
      const x = (Math.random() - 0.5) * radius * 2;
      const y = heightMin + Math.random() * (heightMax - heightMin);
      const z = (Math.random() - 0.5) * radius * 2;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // start colors at base (will be modulated in useFrame)
      colors[i * 3] = base.r;
      colors[i * 3 + 1] = base.g;
      colors[i * 3 + 2] = base.b;

      // random phase and speed for twinkle
      phases[i] = Math.random() * Math.PI * 2;
      speeds[i] = 0.6 + Math.random() * 1.4; // per-star frequency multiplier
    }

    return { positions, colors, phases, speeds };
  }, [count, radius, heightMin, heightMax, color]);

  // animate twinkling
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const geo = pointsRef.current?.geometry;
    const mat = pointsRef.current?.material;
    if (!geo || !mat) return;

    const cols = geo.attributes.color.array;
    // base color for multiplication
    const base = new THREE.Color(color);

    for (let i = 0; i < count; i++) {
      // brightness between ~0.5 and ~1.0 (tweak multiplier/range as desired)
      const b = 0.5 + 0.5 * Math.sin(t * twinkleSpeed * speeds[i] + phases[i]);
      const r = base.r * b;
      const g = base.g * b;
      const bl = base.b * b;
      cols[i * 3] = r;
      cols[i * 3 + 1] = g;
      cols[i * 3 + 2] = bl;
    }

    geo.attributes.color.needsUpdate = true;

    // optional subtle pulsing of global size
    mat.size = baseSize * (1 + 0.35 * Math.sin(t * 0.8));
  });

  return (
    <points ref={pointsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        vertexColors={true}
        size={baseSize}
        sizeAttenuation={true}
        depthWrite={false}
        transparent={true}
        opacity={1}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export default Stars;