'use client'
import { useState } from 'react'

export default function Sidebar({ onAdd }: { onAdd: (sentence: string) => void }) {
  const [text, setText] = useState('')

  return (
    <div className="w-80 bg-slate-800 p-4 flex flex-col">
      <h2 className="text-xl mb-4 font-bold">Neuringlish Network</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your sentence..."
        className="flex-1 p-2 mb-4 rounded bg-slate-700 text-white"
      />
      <button
        onClick={() => { onAdd(text); setText('') }}
        className="bg-blue-600 hover:bg-blue-700 py-2 rounded"
      >
        Add to my network
      </button>
    </div>
  )
}