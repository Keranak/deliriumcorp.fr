import Header from '@/src/components/header';
import Head from 'next/head';
import Footer from '@/src/components/footer'
import NosJeux from '@/src/components/home/nosjeux'


export default function Games(){
    return <> 
        <Head> Nos Jeux- Delirium </Head>
        <Header/>
        <section className='container'>
        <h1 className='center'>Nos Jeux</h1>
            
    <NosJeux/>
        </section>

        <Footer/>
    </>
}

