import * as THREE from 'three';

const HeroLights = () => {
  return (
    <>

        <spotLight 
            position={[2,5,9]} 
            angle={0.15}
            intensity={150} 
            penumbra={0.2}
            color="red"
        />

        <spotLight 
            position={[4,5,4]} 
            angle={0.3}
            intensity={40} 
            penumbra={0.5}
            color="blue"  
        />

        <spotLight 
            position={[-3,5,5]} 
            angle={0.3}
            intensity={60} 
            penumbra={0.4}
            color='blue'
        />

        <primitive 
            object = {new THREE.RectAreaLight('blue', 8, 3, 5)}
            position={[1,1,0.4]}
            intensity={8}
            rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />

        <pointLight 
            position={[0,1,0]}
            intensity={10}
            color="#7209b7"
        />

        <pointLight 
            position={[1,0,0.7]}
            intensity={10}
            color="#7209b7"
        />



        

        
        
    </>
  )
}

export default HeroLights
