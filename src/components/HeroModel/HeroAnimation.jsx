import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './room'
import { Optimized } from './Optimized-room'
import HeroLights from './HeroLights'
import StarsCanvas from './StarsCanvas'

/**
 * 
 * @returns This is the function that creates the canvas for the 3d model
 */
const HeroAnimation = () => {

    const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
    const isMobile = useMediaQuery({query: '(max-width: 768px)'});

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Background star layer (disabled on mobile) */}
      {!isMobile && <StarsCanvas />}


      <Canvas
        camera={{position: [0,0,10], fov: 45}}
        style={{ pointerEvents: isMobile ? 'none' : 'auto' }}
      >
          {/**rotating the object */}
          {!isMobile && (
            <OrbitControls 
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={15}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />
          )}

          {/**Importing the lighting */}
          <HeroLights />
          
          {/**Model positioning */}
          <group
            scale={isMobile ? 0.6 : 0.75}
            position={[0,-2,1.5]}
            rotation={[0,-Math.PI / 4, 0]}
          >
            <Optimized />
          </group>

      </Canvas>
    </div>
  )
}

export default HeroAnimation
