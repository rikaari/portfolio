import React, { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Preload } from '@react-three/drei'
import { useResponsive } from '../../hooks/useResponsive'
import { MeshSSSNodeMaterial } from 'three/webgpu'

const ComputerModel = () => {
  const { scene } = useGLTF('/models/computer-optimized.glb')
  const screenSize = useResponsive()

  // Ensure all meshes can cast/receive shadows
  useEffect(() => {
    if (!scene) return
    scene.traverse((obj) => {
      if (obj.isMesh) {
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })
  }, [scene])

  // Define positions for different screen sizes
  const positions = {
    mobile: [-0.8, -1.5, -1.5],
    md: [-1, -1.5, -1.5],
    xl: [-0.5, -1.5, -1.5],
  }

  // Define scales for different screen sizes
  const scales = {
    mobile: 0.018,  // Smaller on mobile
    md: 0.018,      // Medium screens
    xl: 0.02,       // Full size on desktop
  }
  
  return (
    <primitive 
      object={scene} 
      scale={scales[screenSize]} 
      position={positions[screenSize]}
      rotation={[0, Math.PI / 4, 0]}
    />
  )
}

// Preload the model in the background
useGLTF.preload('/models/computer-optimized.glb')

const ContactModel = () => {
  return (
    <div className="w-full h-[400px] xl:h-[500px]">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        shadows
      >
        <ambientLight intensity={0.8} color='#fff436' />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, 5, 3]} intensity={2.5} color='#ffd9b3' />
        <directionalLight position={[5, 9, 1]} intensity={2.5} castShadow color='#fff436'/>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 5}
        />
        <ComputerModel />
        {/* Shadow-catcher plane under the model */}
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.6, -1.5]}>
          <planeGeometry args={[10, 10]} />
          <shadowMaterial opacity={0.25} />
        </mesh>
        <Preload all />
      </Canvas>
    </div>
  )
}

export default ContactModel
