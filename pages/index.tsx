import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='grid grid-cols-9'>
        <Sidebar />
        <Feed/>
        <Widgets />
      </main>

     
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (context) => {

  // const tweets = await fetchTweet();

  return {
    props: {

    }
  }
}