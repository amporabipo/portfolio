import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

export function GeometryOne() {

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
    myMesh3.current!.rotation.z = a;
    myMesh4.current!.rotation.y = a;
    myMesh5.current!.rotation.x = a;
    myMesh6.current!.rotation.y = a;

  })

  return (
    <>
      <mesh position={[-7, 4, -2]} ref={myMesh}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 2, 2, 1, 20]}
        />
      </mesh>
      <mesh position={[5, 4, -2]} ref={myMesh1}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 2, 2, 1, 20]}
        />
      </mesh>
      <mesh position={[-3, 8, -2]} ref={myMesh2}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 2, 2, 1, 30]}
        />
      </mesh>
      <mesh position={[3, -8, -2]} ref={myMesh3}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[2, 2, 2, 1, 30]}
        />
      </mesh>
      <mesh position={[-3, -5, -2]} ref={myMesh4}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[3, 3, 2, 1, 40]}
        />
      </mesh>
      <mesh position={[3, 0, -2]} ref={myMesh5}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[3, 3, 2, 1, 20]}
        />
      </mesh>
      <mesh position={[-6, -2, -2]} ref={myMesh6}>
        <meshBasicMaterial
          wireframe={true}
          color={'#f9f9f9'}
        />
        <torusGeometry
          args={[1, 1, 2, 1, 10]}
        />
      </mesh>
    </>
  )
}