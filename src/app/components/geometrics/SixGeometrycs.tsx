import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometrySix() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.x = a;
  })

  return (
    <>
      <mesh position={[15, -7, -1]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <icosahedronGeometry
          args={[5, 0]}
        />
      </mesh>
    </>
  )
}