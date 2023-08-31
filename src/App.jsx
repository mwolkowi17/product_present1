
import './App.css'
import 'bootstrap'
import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Stage, ContactShadows } from '@react-three/drei'
import { Model } from './Model'
import { Model2 } from './Model2'
import { Button1 } from './Button'

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

  const [rotateSpeed,setRotateSpeed]=useState(0)
  const [buttonUpeer,setButtonUpper]=useState(false)
  const [buttonLower,setButtonLower]=useState(false)
  return (
    <>
    <Canvas>
      <Stage adjustCamera={false} intensity={0.5} shadows="contact" environment="city">
        <Environment
          background={true} // can be true, false or "only" (which only sets the background) (default: false)
          blur={0.8} // blur factor between 0 and 1 (default: 0, only works with three 0.146 and up)
          preset='sunset'
        />
        {/* <Model scale={[2,2,2]} /> */}
        <Model2 rotateSpeed={rotateSpeed} />
     
      </Stage>
      <OrbitControls />
    </Canvas>
    <Button1 id="przycisk" title={'Rotate Right'} onClick={(e)=>{setButtonUpper(!buttonUpeer),buttonUpeer?setRotateSpeed(0):setRotateSpeed(.5)}}/>
    <Button1 id="przycisk2" title={'Rotate Left'} onClick={(e)=>{setButtonLower(!buttonLower),buttonLower?setRotateSpeed(0):setRotateSpeed(-.5)}}/>
    </>
  )
}
