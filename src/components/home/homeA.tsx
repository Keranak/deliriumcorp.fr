import Adrenaline from '@/src/components/home/adrenaline'
import QuiSommesNous from '@/src/components/home/quisommesnous'
import NosJeux from '@/src/components/home/nosjeux'
import Comments from './comments'

export default function HomeA() {
    return (
        <main>
        <Adrenaline />
        <figure><img src="/fond_haut_de_page.svg" alt="vague" className='vague'/></figure>
        <QuiSommesNous />
        <NosJeux />
        <figure><img src="/fond_haut_de_page.svg" alt="vague" className='vague'/></figure>
        <Comments />
        </main>
    )
    }