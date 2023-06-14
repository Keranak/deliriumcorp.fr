import Image from 'next/image'
import { Inter } from 'next/font/google'
import Adrenaline from '@/src/components/home/adrenaline';
import AdrenalineB from '@/src/components/home/adrenalineB';
import Comments from '@/src/components/home/comments';
import NosJeux from '@/src/components/home/nosjeux';
import QuiSommesNous from '@/src/components/home/quisommesnous';
import Header from '@/src/components/header';

declare global {
  interface Window {
    _paq: any[];
  }
}


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return(
    

    <main>
      <section className="waveBottom after:content-MobileLanguetteBottom">
      <Header/>
      <Adrenaline/>
      <div className="test"></div>
      </section>
      <QuiSommesNous/>
      <section className='wave-top wave-bottom'>
      <div className="test-top"></div>
      <NosJeux/>
      <div className="test"></div>
      </section>
      <section id='slider'>
      <Comments/>
      </section>
      <div className="test-top"></div>


      
    </main>
  )
}
