import Head from 'next/head'
import { ReactNode } from 'react'

interface TemplateProps {
  children: ReactNode
}

const Template = (props: TemplateProps) => {
  const { children } = props
  return (
    <div>
      <Head>
        <title>FingerStyle Taiwan</title>

        <meta name="description" content="fingerstyle taiwan group" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=1"
        />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="FingerStyle Taiwan" />
        <meta property="og:description" content="fingerstyle taiwan group" />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://www.fingerstyletaiwan.com" />
        <meta property="og:site_name" content="FingerStyle Taiwan" />

        <link rel="icon" href="/logo.jpg" />
      </Head>
      {children}
    </div>
  )
}

export default Template
