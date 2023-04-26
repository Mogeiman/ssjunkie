import { NextResponse, NextRequest } from 'next/server';
import prisma from '../../../libs/prismadb';

export async function GET(request: Request, {params}: any) {
  try {
    const {page}  = params;
    const pageSize = 40;

    const skip = (page - 1) * pageSize;
    const take = pageSize;
    const total = await prisma.chaps.count()
    const chapters = await prisma.chaps.findMany({
      select: {
        id: true,
        name: true,
        createdAt: true
      },
      orderBy: {
        createdAt: 'desc'
      },
      skip,
      take,
    });

    const response = {
      chapters,
      total
    };

    return NextResponse.json(response, {status: 200});
    } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Unable to fetch chapters' });
  }
}
