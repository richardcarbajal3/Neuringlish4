'use client'
import Graph3D from '../components/Graph3D'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

export default function Page() {
  const [sentences, setSentences] = useState<string[]>([])

  const addSentence = (sentence: string) => {
    if (!sentence.trim()) return
    setSentences([...sentences, sentence])
  }

  return (
    <div className="flex w-full h-full">
      <div className="flex-1">
        <Graph3D sentences={sentences} />
      </div>
      <Sidebar onAdd={addSentence} />
    </div>
  )
}