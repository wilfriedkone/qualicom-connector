import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 70;
const RADIUS = 4.2;
const LINK_DIST = 1.35;

function Network() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * RADIUS * 2;
      positions[i * 3 + 1] = (Math.random() - 0.5) * RADIUS * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * RADIUS * 2;
      velocities[i * 3] = (Math.random() - 0.5) * 0.0025;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.0025;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.0025;
    }
    return { positions, velocities };
  }, []);

  const lineGeom = useMemo(() => new THREE.BufferGeometry(), []);
  const lineAttr = useMemo(
    () => new Float32Array(COUNT * COUNT * 3),
    []
  );

  useFrame((_, delta) => {
    const t = Math.min(delta, 0.05);
    const pos = positions;
    for (let i = 0; i < COUNT; i++) {
      const ix = i * 3;
      pos[ix] += velocities[ix] * 60 * t;
      pos[ix + 1] += velocities[ix + 1] * 60 * t;
      pos[ix + 2] += velocities[ix + 2] * 60 * t;
      for (let a = 0; a < 3; a++) {
        if (Math.abs(pos[ix + a]) > RADIUS) velocities[ix + a] *= -1;
      }
    }

    if (pointsRef.current) {
      const attr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
      attr.array = pos;
      attr.needsUpdate = true;
    }

    // links
    let li = 0;
    for (let i = 0; i < COUNT; i++) {
      for (let j = i + 1; j < COUNT; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const d2 = dx * dx + dy * dy + dz * dz;
        if (d2 < LINK_DIST * LINK_DIST) {
          lineAttr[li++] = pos[i * 3];
          lineAttr[li++] = pos[i * 3 + 1];
          lineAttr[li++] = pos[i * 3 + 2];
          lineAttr[li++] = pos[j * 3];
          lineAttr[li++] = pos[j * 3 + 1];
          lineAttr[li++] = pos[j * 3 + 2];
        }
      }
    }
    const sliced = lineAttr.subarray(0, li);
    lineGeom.setAttribute("position", new THREE.BufferAttribute(sliced, 3));
    lineGeom.attributes.position.needsUpdate = true;
    lineGeom.setDrawRange(0, li / 3);

    if (groupRef.current) {
      groupRef.current.rotation.y += t * 0.08;
      groupRef.current.rotation.x += t * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={COUNT}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={new THREE.Color("#10b981")}
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.9}
          depthWrite={false}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeom}>
        <lineBasicMaterial
          color={new THREE.Color("#0F5132")}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroNetwork() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.6} />
      <Network />
    </Canvas>
  );
}
