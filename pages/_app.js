import '../styles/globals.css'
import Head from 'next/head'
import {SessionProvider} from 'next-auth/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}

export default MyApp
