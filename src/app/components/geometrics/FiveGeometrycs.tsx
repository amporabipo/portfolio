import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryFive() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.z = a;
  })

  return (
    <>
      <mesh position={[5, 5, -1]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusKnotGeometry
          args={[1, 4, 3, 1, 4, 3]}
        />
      </mesh>
    </>
  )
}