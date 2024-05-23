import '../styles/globals.css'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_ANALYTICS_ID });
  }, [])

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
