import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { useLoader } from '@react-three/fiber'

export function Model(props) {
  const { nodes, materials } = useGLTF("/kotiwca1.glb");
  const [colorMap, displacementMap, normalMap, roughnessMap, metalnessMap] = useLoader(TextureLoader, [
    'Metal046A_1K_Color.jpg',
    'Metal046A_1K_Displacement.jpg',
    'Metal046A_1K_NormalGL.jpg',
    'Metal046A_1K_Roughness.jpg',
    'Metal046A_1K_Metalness.jpg'


  ])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        //material={materials["CW-Iron"]}
        position={[-0.202, -0.344, -0.091]}
        rotation={[1.014, 0, Math.PI]}
        scale={[0.102, 0.075, 0.102]}>
        <meshStandardMaterial
          // map={colorMap}
          // displacementScale={.5}
          // displacementMap={displacementMap}
          // normalMap={normalMap}
          // roughnessMap={roughnessMap}
          // roughness={0.8}
          // metalnessMap={metalnessMap}
          // metalness={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        //material={materials["CW-Iron"]}
        position={[-0.366, -0.443, -0.016]}
        rotation={[2.585, 0, Math.PI / 2]}
        scale={[0.03, 0.362, 0.03]}
      >
        <meshStandardMaterial
          // map={colorMap}
          // displacementScale={.5}
          // displacementMap={displacementMap}
          // normalMap={normalMap}
          // roughnessMap={roughnessMap}
          // roughness={0.8}
          // metalnessMap={metalnessMap}
          // metalness={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        //material={materials["CW-Iron"]}
        position={[-0.417, -0.482, 0.005]}
        rotation={[2.585, 0, Math.PI]}
        scale={[-0.012, 0.131, 0.111]}
      >
        <meshStandardMaterial
          // map={colorMap}
          // displacementScale={.5}
          // displacementMap={displacementMap}
          // normalMap={normalMap}
          // roughnessMap={roughnessMap}
          // roughness={0.8}
          // metalnessMap={metalnessMap}
          // metalness={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        //material={materials["CW-Iron"]}
        position={[-0.367, 0, -0.004]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[0.036, 0.046, 0.054]}
      >
        <meshStandardMaterial
          // map={colorMap}
          // displacementScale={.5}
          // displacementMap={displacementMap}
          // normalMap={normalMap}
          // roughnessMap={roughnessMap}
          // roughness={0.8}
          // metalnessMap={metalnessMap}
          // metalness={0.8}
        />
      </mesh>
      <group
        position={[-0.407, 0.822, -0.004]}
        rotation={[Math.PI, 0, Math.PI / 2]}
        scale={[0.025, 0.015, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
        //material={materials["CW steel"]}
        >
          <meshStandardMaterial
            // map={colorMap}
            // displacementScale={.5}
            // displacementMap={displacementMap}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
            // roughness={0.8}
            // metalnessMap={metalnessMap}
            // metalness={0.8}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
        //material={materials["CW-Iron"]}
        >
          <meshStandardMaterial
            // map={colorMap}
            // displacementScale={.5}
            // displacementMap={displacementMap}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
            // roughness={0.8}
            // metalnessMap={metalnessMap}
            // metalness={0.8}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
        //material={materials["CW-Aluminum-matte"]}
        >
          <meshStandardMaterial
            // map={colorMap}
            // displacementScale={.5}
            // displacementMap={displacementMap}
            // normalMap={normalMap}
            // roughnessMap={roughnessMap}
            // roughness={0.8}
            // metalnessMap={metalnessMap}
            // metalness={0.8}
          />
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/kotiwca1.glb");



