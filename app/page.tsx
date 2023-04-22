import { Inter } from 'next/font/google'
import Hero from './components/Hero/Hero'
import Summary from './components/Summary'
import ChapterList from './components/Tablechapter'
const inter = Inter({ subsets: ['latin'] })
import getChapters from "./actions/getChapters";

export default async function Home() {
  const chapters = await getChapters()

  var count = chapters?.length + 1
  return (
    <main className='mx-auto h-auto '>
      <Hero chapterCount={count}/>
      <Summary />
          <ChapterList
            data={chapters}
          />
      </main>
  )
}
