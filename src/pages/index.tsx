import Image from 'next/image'
import { Inter } from 'next/font/google'
import Adrenaline from '@/src/components/home/adrenaline';
import AdrenalineB from '@/src/components/home/adrenalineB';
import Comments from '@/src/components/home/comments';
import NosJeux from '@/src/components/home/nosjeux';
import QuiSommesNous from '@/src/components/home/quisommesnous';
import Header from '@/src/components/header';
import Footer from '@/src/components/footer';

declare global {
  interface Window {
    _paq: any[];
  }
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return(
    

    <main>
      <section className='waveBottom'>
      <Header/>
      <Adrenaline/>
      </section>
      <QuiSommesNous/>
      <section className='wave-top wave-bottom'>
      <NosJeux/>
      </section>
      <section id='slider'>
      <Comments/>
      </section>
      <Footer/>
      
    </main>
  )
}
