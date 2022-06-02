import Head from 'next/head'
import { Header } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col items-center w-screen h-full p-4'>
        <Header />
        
      </main>
    </div>
  )
}
