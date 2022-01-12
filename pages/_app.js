import '../styles/globals.css'
import Router from 'next/router'
import nprogress from 'nprogress'
import Head from 'next/head'
import {ChakraProvider} from '@chakra-ui/react'

import Layout from '../Component/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>

    </Head>
    <ChakraProvider>
      <Layout>    
  <Component {...pageProps} />
  </Layout>
  </ChakraProvider>
  </>
  )}

export default MyApp
