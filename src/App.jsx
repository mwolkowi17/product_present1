
import './App.css'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Stage, ContactShadows } from '@react-three/drei'
import { Model } from './Model'
import { Model2 } from './Model2'

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(true))}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function App(props) {
  return (
    <Canvas>
      <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
        <Environment
          background={true} // can be true, false or "only" (which only sets the background) (default: false)
          blur={0.8} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
          preset='sunset'
        />
        {/* <Model scale={[2,2,2]} /> */}
        <Model2 />
     
      </Stage>
      <OrbitControls />
    </Canvas>
  )
}
