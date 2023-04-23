import { Inter } from 'next/font/google'
import Summary from './components/Summary'
import Hero from './components/Hero/Hero'
import Tablechapter from './components/TableChapter/Tablechapter'

const inter = Inter({ subsets: ['latin'] })
// import getChapters from "./actions/getChapters";
const Home = async() => {
  // const chapters = await getChapters()

  // var count = chapters?.length + 1

  return (
    <main className='mx-auto h-auto '>
      <Hero />
      <Summary />
      <Tablechapter />
      </main>
  )
}

export default Home