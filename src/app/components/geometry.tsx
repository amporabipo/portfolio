import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export default function GeometryOne() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    myMesh.current!.rotation.x = a;
  })

  return (
    <>
      <mesh position={[-5, 2, 0]} ref={myMesh}>
        <meshStandardMaterial wireframe={true} color={'#f9f9f9'} />
        <boxGeometry args={[5, 5, 5]} />
      </mesh>
    </>
  )
}