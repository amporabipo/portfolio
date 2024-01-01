import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryTwo() {

  const myMesh = useRef<THREE.Mesh>(null)
  const myMesh1 = useRef<THREE.Mesh>(null)
  const myMesh2 = useRef<THREE.Mesh>(null)
  const myMesh3 = useRef<THREE.Mesh>(null)
  const myMesh4 = useRef<THREE.Mesh>(null)
  const myMesh5 = useRef<THREE.Mesh>(null)
  const myMesh6 = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() / 20;
    myMesh.current!.rotation.x = a;
    myMesh1.current!.rotation.y = a;
    myMesh2.current!.rotation.z = a;
    myMesh3.current!.rotation.x = a;
    myMesh4.current!.rotation.y = a;
    myMesh5.current!.rotation.y = a;
    myMesh6.current!.rotation.x = a;

  })

  return (
    <>
      <mesh position={[8, -5, -1]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 2, 2, 2]}
        />
      </mesh>
      <mesh position={[-8, -6, -1]} ref={myMesh1}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 2, 2, 3]}
        />
      </mesh>
      <mesh position={[8, 6, -1]} ref={myMesh2}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 2, 2, 3]}
        />
      </mesh>
      <mesh position={[-8, 6, -1]} ref={myMesh3}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 2, 2, 3]}
        />
      </mesh>
      <mesh position={[-8, -6, -1]} ref={myMesh4}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 2, 2, 3]}
        />
      </mesh>
      <mesh position={[10, 0, 0]} ref={myMesh5}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 3, 2, 4]}
        />
      </mesh>
      <mesh position={[-9, 1, -1]} ref={myMesh6}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 1, 2, 2, 3]}
        />
      </mesh>
    </>
  )
}