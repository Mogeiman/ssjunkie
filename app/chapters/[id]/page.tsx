import prisma from '../../libs/prismadb'
import ChapterText from './ChapterText'
import getChapter from '../../actions/getChapter'

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}) {
  const {id} = params
  const chapter = await getChapter(id)
  const description = chapter?.text.slice(0, 3).join(' ')
  const title = chapter?.name?.replace(/-/g, ' ')
  return {
    title,
    description
  };
}


export default async function Chapter({params}: any) {
  const {id} = params
  const chapter = await getChapter(id)  

  return (
    
      chapter ? <ChapterText data={chapter}/> : <h1> no chapter yet</h1>
    
  
  
  )
}
