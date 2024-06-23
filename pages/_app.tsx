import { AuthProvider } from '@/contexts/AuthContexts'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Head>
          <title>Rafael e Mirelle</title>
         
          <link rel="shortcut icon" href="/images/logo.webp" />
        </Head>
      <Component {...pageProps} />
      <ToastContainer autoClose={3000} />
    </AuthProvider>

  )
}
