import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb';

export async function GET() {
  try {
    const chapters = await prisma.chaps.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(chapters); 
   } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to fetch chapters' });
  }
}
