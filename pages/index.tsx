import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomeA from '@/src/components/home/homeA'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return(
    

    <main>
      <HomeA />
    </main>
  )
}
