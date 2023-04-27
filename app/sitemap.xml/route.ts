 
import prisma from '../libs/prismadb';
import { NextResponse, NextRequest } from 'next/server';

const URL = "https://www.shadowslavejunkie.online/";
 
function generateSiteMap(chapters: any) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${URL}</loc>
     </url>
     ${chapters
       .map(({ id }:any) => {
         return `
           <url>
               <loc>${`${URL}/api/chapters/${id}`}</loc>
           </url>
         `;
       })
       .join("")}
   </urlset>
 `;
}
export async function GET(request: NextRequest) {
    try {
      const chapters = await prisma.chaps.findMany({
        select: {
          id: true,
          name: true,
          createdAt: true
        },
        orderBy: {
          createdAt: 'desc'
        },
      });
  
      const sitemap = generateSiteMap(chapters);
  
      return new Response(sitemap, {
        status: 200,
        headers: {
          "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
          "content-type": "application/xml",
        },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: 'Unable to fetch chapters' }), {
        status: 500,
        headers: {
          "content-type": "application/json",
        },
      });
    }
  }
  