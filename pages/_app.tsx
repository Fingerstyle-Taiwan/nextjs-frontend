import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return 
    <>
        <Script strategy="lazyOnload">
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
    </>
   

}

export default MyApp
