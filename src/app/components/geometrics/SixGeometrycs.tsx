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
      <mesh position={[-12, 7, -1]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusKnotGeometry
          args={[1, 3, 5, 1, 4, 7]}
        />
      </mesh>
    </>
  )
}