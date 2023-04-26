import { MetadataRoute } from 'next';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
export default function Sitemap(): MetadataRoute.Sitemap {
    const chapters = useSelector((state: RootState) => state?.chapter?.data);

    const sitemapUrls = chapters?.map((chapter) => ({
        url: `https://wwww.shadowslavejunkie.online/chapters/${chapter.id}`,
        lastModified: new Date(),
      }));
      console.log(sitemapUrls)
  return sitemapUrls;
}
