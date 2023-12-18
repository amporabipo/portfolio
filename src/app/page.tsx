'use client'
import { Canvas } from '@react-three/fiber'
import Box from './components/geometry'
import { Html } from '@react-three/drei'
import { Board } from './components/board'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
          <Html center>
            <Board />
          </Html>
        </Canvas>
      </div>
    </>
  )
}
