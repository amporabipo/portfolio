import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryThree() {


  const myMesh1 = useRef<THREE.Mesh>(null)
  const myMesh2 = useRef<THREE.Mesh>(null)
  const myMesh3 = useRef<THREE.Mesh>(null)
  const myMesh4 = useRef<THREE.Mesh>(null)
  const myMesh5 = useRef<THREE.Mesh>(null)
  const myMesh6 = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 10;

    myMesh1.current!.rotation.z = a;
    myMesh2.current!.rotation.z = a;
    myMesh3.current!.rotation.z = a;
    myMesh4.current!.rotation.z = a;
    myMesh5.current!.rotation.z = a;
    myMesh6.current!.rotation.z = a;


  })

  return (
    <>

      <mesh position={[-10, -2, 2]} ref={myMesh1}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[1, 1, 4, 1, 40]}
        />
      </mesh>
      <mesh position={[10, -2, 2]} ref={myMesh2}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[1, 1, 4, 1, 40]}
        />
      </mesh>
      <mesh position={[-10, -2, 2]} ref={myMesh3}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[1, 1, 4, 1, 40]}
        />
      </mesh>
      <mesh position={[-10, -2, 2]} ref={myMesh4}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[1, 1, 4, 1, 40]}
        />
      </mesh>
      <mesh position={[-10, -2, 2]} ref={myMesh5}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[1, 1, 4, 1, 40]}
        />
      </mesh>
      <mesh position={[-10, -2, 2]} ref={myMesh6}>
        <meshBasicMaterial
          wireframe={true}
          color={'#c9c9c9'}
        />
        <torusGeometry
          args={[1, 1, 4, 1, 40]}
        />
      </mesh>
    </>
  )
}