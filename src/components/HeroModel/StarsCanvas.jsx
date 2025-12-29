import React from 'react'
import { Canvas } from '@react-three/fiber'
import Stars from './Stars'

/**
 * Full-size, non-interactive canvas that renders the star field behind the main scene.
 * pointerEvents: 'none' ensures mouse interacts with the main Canvas only.
 */
export default function StarsCanvas({ className = '' }) {
  return (
    <Canvas
      // We don't need controls here; camera is fixed so it won't conflict with the main Canvas
      camera={{ position: [0, 6, 18], fov: 50 }}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,              // behind the main Canvas
        pointerEvents: 'none',  // allow mouse events to pass through
      }}
      className={className}
    >
      {/* Stars component from your earlier code */}
      <Stars count={500} radius={12} heightMin={2} heightMax={12} baseSize={0.04} />
    </Canvas>
  )
}