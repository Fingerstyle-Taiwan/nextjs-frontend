import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Head>
        <title>FingerStyle Taiwan</title>
        <meta name="description" content="fingerstyle taiwan group" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=1"></meta>
        <link rel="icon" href="/logo.jpg" />
      </Head>

      <main>
        <div className="flex justify-between items-center flex-col">
          <img className="rounded-full w-60 sm:w-56 md:w-52 lg:w-48" src="/logo.jpg" />
          <h1 className="title mt-9 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            FingerStyle Taiwan
          </h1>
        </div>
        <div className="text-center text-gray-500 text-2xl mt-9">
          coming soon...
        </div>
      </main>
    </div>
  )
}

export default Home
