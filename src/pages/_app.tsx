import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Head from 'next/head'
import { LinkHTMLAttributes } from 'react';

import TagManager from 'gtm-for-react'
import { env } from 'process'

export default function App({ Component, pageProps }: AppProps) {

  
useEffect(() => {
  const tagManagerArgs = {
    gtmId: 'GTM-KNN6MTD',
}


  TagManager.initialize(tagManagerArgs)
}, [])

  return (
    <>
    <Head>
    <title>Delirium Corp</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content="Delirium Corp, une entreprise énigmatique, se distinguait par son objectif audacieux : repousser les limites de l'expérience humaine à travers des aventures extrêmes. L’entreprise était devenu synonyme d'adrénaline, de camaraderie et de transformation, attirant les aventuriers et les équipes désireux de découvrir un monde où la réalité et l'imaginaire se confondent."/>
   
    
    </Head>
    <Component {...pageProps} />
    
    </>
  )
}
