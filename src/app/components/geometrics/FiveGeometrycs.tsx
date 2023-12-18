import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryFive() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.x = a;
  })

  return (
    <>
      <mesh position={[0, 1.2, 7]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[2, 2, 2, 2, 1.5]}
        />
      </mesh>
    </>
  )
}