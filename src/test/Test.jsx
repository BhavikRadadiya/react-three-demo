import React from 'react'
import { OrbitControls, ScrollControls, Scroll, useScroll, Html, SpotLight } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import useRefs from 'react-use-refs'
import Scene from '../components/3D/Scene'
import { forwardRef } from 'react'


function Test() {
  return (
    <>
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} >
        <ambientLight intensity={0.1} />
        <directionalLight color={"white"} position={[0, 0, 5]} />
        <ScrollControls pages={1.5} infinite={false} >
          <Scene />
          <Scroll html className='w-full pt-10'>
            <div className="my-20 px-8 mr-12 lg:mt-32 xl:mt-0 xl:mr-12 absolute  w-1/2">
              <h1 className="text-5xl my-5 font-serif ">Smart Developer</h1>
              <p className="text-lg mb-8 text-gray-400 font-thin">
                Smart Developer is specialized in Oracle ADF including a lot of services like converting and developing applications and computer systems related to system automation and transformation to paperless environment, in addition to offering solutions and consultation to build computer systems using the latest technologies.
              </p>
              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                Learn More
              </button>
            </div>
          </Scroll>
        </ScrollControls>
        <OrbitControls enableDamping={true} enableRotate={true} enableZoom={false} />
      </Canvas>
    </>
  )
}


export default Test