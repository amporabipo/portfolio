import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryThree() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.x = a;
  })

  return (
    <>
      <mesh position={[-5, -4, 7]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[3, 2, 4, 4, 7]}
        />
      </mesh>
    </>
  )
}