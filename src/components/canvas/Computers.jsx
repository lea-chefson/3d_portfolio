import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_2/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.55} groundColor={"black"}/>
      <pointLight intensity={4}
      color={"purple"}/>
      <spotLight
        position={[20,50,10]}
        angle={0.3}
        color={"cyan"}
        penumbra={0.5}
        intensity={isMobile ? 0.5 :0.8}
        castShadow
        />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7: 1.7}
        position = {isMobile ? [0,-2.3,0.2] : [-2,-2.8,-0.5]}
        rotation = {[-0.02,0.7,0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: 500px)`);

    setIsMobile(mediaQuery.matches);

    const handleMediaQuerychange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener(`change`, handleMediaQuerychange);

    return () => {
      mediaQuery.removeEventListener(`change`, handleMediaQuerychange);
    }
  }, []);

  return(
    <Canvas
      shadows
      camera={{position:[20,3,5], fov:25 }}
      gl={{preserveDrawingBuffer: true }}
      id="your-canvas-id"
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        minAzimuthAngle={Math.PI /0}
        maxAzimuthAngle={Math.PI/0 }
        autoRotate={false}
        autoRotateSpeed={5} 
        />
        <Computers isMobile={ isMobile }/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas