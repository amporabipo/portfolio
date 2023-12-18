import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryOne() {

  const myMesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.z = a;
  })

  return (
    <>
      <mesh position={[-6, 4, -2]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 1, 2, 1, 8]}
        />
      </mesh>
    </>
  )
}