import { Float, OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import React, { useEffect } from 'react'
import * as THREE from 'three'

const TechIcon = ({model}) => {

    const scene = useLoader(GLTFLoader, model.modelPath, (loader) => {
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('/draco/')
        dracoLoader.setDecoderConfig({ type: 'js' })
        loader.setDRACOLoader(dracoLoader)
    })

    useEffect(() => {
        if(model.name === 'Interactive Developer'){
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === 'Object_5'){
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }

        
        if(model.name === 'Java Developer'){
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === 'Plane001_0'){
                    child.material = new THREE.MeshStandardMaterial({color: '#ff7f00'})
                }
                if(child.isMesh && (child.name === 'Torus000_0' || child.name === 'Torus001_0')){
                    child.material = new THREE.MeshStandardMaterial({color: '#ff7f00'})
                }
            })
        }

    })

  return (
    <Canvas>
        <ambientLight intensity={1}/>
        <directionalLight position={[5,5,5]} intensity={1.5} />
        <OrbitControls enableZoom={false} />

        <Suspense fallback={null}>
          <Float speed={5.5} rotationIntensity={0.8}>
              <group scale={model.scale} rotation={model.rotation}>
                  <primitive object={scene.scene}/>
              </group>
          </Float>
        </Suspense>
    </Canvas>
  )
}

export default TechIcon