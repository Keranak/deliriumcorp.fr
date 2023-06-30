import Header from '@/src/components/header';
import Head from 'next/head';
import NosJeux from '@/src/components/tousjeux'


export default function Games(){
    return <> 
        <Head> Nos Jeux- Delirium </Head>
        <Header/>
            
    <NosJeux/>

    </>
}

