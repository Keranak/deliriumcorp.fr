import Header from '@/src/components/header';
import Head from 'next/head';
import NosJeux from '@/src/components/home/nosjeux'


export default function Games(){
    return <> 
        <Head> Nos Jeux- Delirium </Head>
        <Header/>
            
    <NosJeux/>

    </>
}

