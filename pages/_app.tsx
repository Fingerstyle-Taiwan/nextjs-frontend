import '../styles/globals.css'
import { store } from '../store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { GoogleOAuthProvider } from '@react-oauth/google'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Provider store={store}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** Put your mantine theme override here */
            colorScheme: 'light',
          }}
        >
          <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
            <Component {...pageProps} />
          </GoogleOAuthProvider>
          ;
        </MantineProvider>
      </Provider>
    </>
  )
}
