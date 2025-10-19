'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Text } from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Graph3D({ sentences }: { sentences: string[] }) {
  const groupRef = useRef<THREE.Group>(null)

  useEffect(() => {
    const animate = () => {
      if (groupRef.current) groupRef.current.rotation.y += 0.0015
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[10, 10, 5]} />
      <group ref={groupRef}>
        {sentences.map((sentence, i) => (
          <group key={i} position={[Math.sin(i) * 6, Math.cos(i) * 6, i * 0.2]}>
            <Sphere args={[0.4, 32, 32]}>
              <meshStandardMaterial color="#60a5fa" />
            </Sphere>
            <Text position={[0, 0.8, 0]} fontSize={0.4}>{sentence.slice(0, 10)}</Text>
          </group>
        ))}
      </group>
      <OrbitControls />
    </Canvas>
  )
}