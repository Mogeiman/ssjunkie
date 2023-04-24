import prisma from '@/app/libs/prismadb'



export default async function getChapters(page: number) {
    try {

        const Chapters = await prisma.chaps.findMany({
          orderBy: {
            createdAt: 'desc'
          }
        })
        return Chapters
      } catch (error: any) {
        throw new Error(error)
}

}

