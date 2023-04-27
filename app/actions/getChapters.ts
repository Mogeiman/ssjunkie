import prisma from '@/app/libs/prismadb'



export default async function getChapters() {
    try {

        const Chapters = await prisma.chaps.findMany({
          orderBy: {
            createdAt: 'desc'
          },
          select: {
            id: true,
            name: true
          }
        })
        return Chapters
      } catch (error: any) {
        throw new Error(error)
}

}

