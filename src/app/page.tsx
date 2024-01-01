'use client'
import { Canvas } from '@react-three/fiber'
import {
  GeometryOne,
  GeometryThree,
  GeometryTwo,
  GeometryFour,
  GeometryFive,
  GeometrySix,
  GeometrySeven
} from '@/app/components/geometrics'
import { Html } from '@react-three/drei'
import { Board } from '@/app/components/board'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <GeometryOne />
          <GeometryTwo />

          <Html center>
            <Board />
          </Html>
        </Canvas>
      </div>
    </>
  )
}
