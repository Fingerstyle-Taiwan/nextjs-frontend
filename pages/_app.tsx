import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'
import { store } from '../store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Script strategy="lazyOnload" id="google-ad-script">
        {`
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', 'G-L0SLFX17MJ', {
                      page_path: window.location.pathname,
                      });
                  `}
      </Script>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
