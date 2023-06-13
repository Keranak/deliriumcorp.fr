import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/src/components/navbar'
import Footer from '@/src/components/footer'

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <title>Delirium-Corp</title>
        
      </Head>
      <body>
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    
    </Html>
  )
}
