import Adrenaline from '@/src/components/home/adrenaline'
import QuiSommesNous from '@/src/components/home/quisommesnous'
import NosJeux from '@/src/components/home/nosjeux'
import Comments from './comments'

export default function HomeA() {
    return (
        <main>
        <Adrenaline />
        <QuiSommesNous />
        <NosJeux />
        <Comments />
        </main>
    )
    }