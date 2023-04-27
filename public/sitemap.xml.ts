import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const chapters = fetch(`/api/chapters/${1}`)
  console.log(chapters)
  return [
    {
      url: 'https://acme.com',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/about',
      lastModified: new Date(),
    },
    {
      url: 'https://acme.com/blog',
      lastModified: new Date(),
    },
  ];
}
 
// export async function GET(request: Request) {
//   try {

//     const chapters = await prisma.chaps.findMany({
//       select: {
//         id: true,
//         name: true,
//         createdAt: true
//       },
//       orderBy: {
//         createdAt: 'desc'
//       },
//     });

//      generateSiteMap(chapters)

//     return NextResponse.json(chapters, {
//     status: 200,
//     headers: {
//       "Cache-control": "public, s-maxage=86400, stale-while-revalidate",
//       "content-type": "application/xml",
//     },
//   });
//     } catch (error) {
//     console.error(error);
//     return NextResponse.json({ error: 'Unable to fetch chapters' });
//   }
// }
