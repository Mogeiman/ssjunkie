import prisma from '@/app/libs/prismadb'


export default async function getChapters(id: any) {
    try{
        const Chapters = await prisma.chaps.findFirst({
            where: {
                id
            }
        })
        return Chapters
    }catch(err: any){
        throw new Error(err)
    }
}


