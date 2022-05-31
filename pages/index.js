import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='text-red-400'>
        Welcome to Movie Land!
      </main>
    </div>
  )
}
