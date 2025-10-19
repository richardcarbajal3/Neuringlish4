import './globals.css'
import type { ReactNode } from 'react'

export const metadata = { title: 'Neuringlish', description: '3D Language Network' }

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-slate-900 text-white">{children}</body>
    </html>
  )
}