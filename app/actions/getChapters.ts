import prisma from '@/app/libs/prismadb'


export default async function getChapters() {
    try {
        const Chapters = await prisma.chaps.findMany({
          orderBy: {
            createdAt: 'desc'
          }
        })
        return Chapters
      } catch (err) {
        console.error('Error retrieving chapters:', err)
        return [] // return an empty array as a default value
}

}

