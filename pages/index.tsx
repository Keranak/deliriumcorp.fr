import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeA from '@/src/components/home/homeA'


declare global {
  interface Window {
    _paq: any[];
  }
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return(
    

    <main>
      <HomeA />
    </main>
  )
}
