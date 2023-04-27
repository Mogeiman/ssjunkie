import Summary from './components/Summary'
import Hero from './components/Hero/Hero'
import Tablechapter from './components/TableChapter/Tablechapter'

export default async function Home() {
  return (
    <main className='mx-auto h-auto'>
      <Hero />
      <Summary />
      <Tablechapter />
      </main>
  )
}

