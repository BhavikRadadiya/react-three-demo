/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: dynastro (https://sketchfab.com/dynastro)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/boy-78c4ecbf0d86472fbed1bdf1565eaf20
title: Boy
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { Scroll, useGLTF, useScroll } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'


export default function Model({ ...props }) {
  const group = useRef()
  const scroll = useScroll()
  const { nodes, materials } = useGLTF('../Boy 3D/scene.gltf')

  useFrame(() => { group.current.rotation.y = (scroll.offset * Math.PI * 2) })

  return (
    <Scroll>
      <group ref={group} {...props} dispose={null} scale={0.5}>
        <group rotation={[-Math.PI / 2, 0, 0]}  >
          <group rotation={[Math.PI / 2, 0, 0]} >
            <group position={[0, 0.04, 0.41]} rotation={[Math.PI / 2, 0, 0]} scale={0.21}>
              <mesh geometry={nodes.Object_4.geometry} material={materials.eye_white} />
              <mesh geometry={nodes.Object_5.geometry} material={materials.eye_color} />
              <mesh geometry={nodes.Object_6.geometry} material={materials.eye_black} />
            </group>
            <mesh geometry={nodes.Object_8.geometry} material={materials.skin} />
            <mesh geometry={nodes.Object_9.geometry} material={materials.skin} />
            <group position={[0, 0, 2.53]}>
              <mesh geometry={nodes.Object_11.geometry} material={materials['Material.001']} />
              <mesh geometry={nodes.Object_12.geometry} material={materials['Material.001']} />
            </group>
            <group position={[0, -1.9, 0]}>
              <mesh geometry={nodes.Object_14.geometry} material={materials.t_shirt_white} />
              <mesh geometry={nodes.Object_15.geometry} material={materials.t_shirt_yellow} />
            </group>
            <group position={[0, -3.17, 0]} scale={0.62}>
              <mesh geometry={nodes.Object_17.geometry} material={materials.jeans} />
            </group>
            <group position={[0, -5.39, 0]} scale={0.5}>
              <mesh geometry={nodes.Object_19.geometry} material={materials.shoes_red} />
              <mesh geometry={nodes.Object_20.geometry} material={materials.shoe_white} />
              <mesh geometry={nodes.Object_21.geometry} material={materials.Material} />
            </group>
            <group position={[0, -4.75, 0]} scale={[0.13, 0.32, 0.13]}>
              <mesh geometry={nodes.Object_23.geometry} material={materials.material} />
            </group>
            <group position={[0, -2.73, 0]}>
              <mesh geometry={nodes.Object_25.geometry} material={materials.hand} />
            </group>
            <group position={[0, -0.31, 0.81]} scale={0.46}>
              <mesh geometry={nodes.Object_27.geometry} material={materials['Material.001']} />
            </group>
            <group position={[0, 0, -11.01]} rotation={[Math.PI / 2, 0, 0]} scale={19.33}>
              <mesh geometry={nodes.Object_29.geometry} material={materials.material_0} />
            </group>
          </group>
        </group>
      </group>
    </Scroll>
  )
}

useGLTF.preload('../Boy 3D/scene.gltf')
