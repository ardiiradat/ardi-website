import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from './component/sidebar.js'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen w-100 flex-col items-center justify-between p-24">
      <Sidebar />
      <h1>
        Wakwaw
      </h1>
    </main>
  )
}
