import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryFour() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.z = a;
  })

  return (
    <>
      <mesh position={[-5, -5, -1]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#'}
        />
        <torusKnotGeometry
          args={[2, 5, 3, 1, 4, 1]}
        />
      </mesh>
    </>
  )
}