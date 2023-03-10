import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Model } from './Avatar'

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }))
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0)
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='hotpink' />
    </mesh>
  )
}

function Plane() {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0] }))

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach='geometry' args={[10, 10]} />
      <meshLambertMaterial attach='material' color='lightblue' />
    </mesh>
  )
}
function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <OrbitControls />
      <Stars />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Model position={[0.025, 2, 0]} />
        <Box />
        <Plane />
      </Physics>
    </Canvas>
  )
}

export default App
