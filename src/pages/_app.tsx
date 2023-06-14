import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import TagManager from 'gtm-for-react'
import { env } from 'process'

export default function App({ Component, pageProps }: AppProps) {

useEffect(() => {
  const tagManagerArgs:any = {
    gtmId: 'GTM-5K7K6ND',
}

  TagManager.initialize(tagManagerArgs)
}, [])

  return <Component {...pageProps} />
}
