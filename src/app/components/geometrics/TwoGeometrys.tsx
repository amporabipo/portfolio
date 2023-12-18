import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryTwo() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.z = a;
  })

  return (
    <>
      <mesh position={[5, -6, -1]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 1, 2, 3, 2]}
        />
      </mesh>
    </>
  )
}