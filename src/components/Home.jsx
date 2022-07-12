import { OrbitControls, ScrollControls, Scroll, useScroll } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Scene from '../components/3D/Scene'
import Test from '../test/Test'

function Home() {
  return (
    <>
      <div className="mb-16 px-8  lg:mt-32 xl:mt-40 xl:mr-12 absolute top-0">
        <h1 className="text-5xl mb-5 font-serif ">Smart Developer</h1>
        <p className="text-lg mb-8 text-gray-400 font-thin">Smart Developer is specialized in Oracle ADF including a lot of services like converting and developing applications and computer systems related to system automation and transformation to paperless environment, in addition to offering solutions and consultation to build computer systems using the latest technologies.</p>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Learn More</button>
      </div>
      {/*Canvas*/}
      <Canvas gl={{ antialias: false }} dpr={[1, 1.5]} className="relative">
        <ambientLight intensity={0.5} />
        <directionalLight color={"white"} position={[0, 0, 5]} />
        <ScrollControls pages={2} >
          <Scroll html style={{ width: '50%' }}>
            {/*Object*/}
            {/* <Scene /> */}
            <h1>HI</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit incidunt ratione, cumque iste odit quam, maiores itaque unde ad possimus sequi aliquam assumenda ut aspernatur nam praesentium, quaerat distinctio fugiat!</h1>
          </Scroll>
        </ScrollControls>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>

  )
}

export default Home