import prisma from '../../libs/prismadb'
import ChapterText from './ChapterText'
import getChapter from '../../actions/getChapter'

export default async function Chapter({params}: any) {
  const {id} = params
  const chapter = await getChapter(id)  

  return (
    
      chapter ? <ChapterText data={chapter}/> : <h1> no chapter yet</h1>
    
  
  
  )
}
