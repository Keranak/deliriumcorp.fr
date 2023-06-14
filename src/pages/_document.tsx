import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/src/components/footer'
import React from 'react'





export default function Document() {

  return (
    <Html lang="fr">
      <Head>
        <title>Delirium-Corp</title>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    
    </Html>
  )
}