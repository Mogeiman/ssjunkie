import { chaps } from "@prisma/client"
import Link from "next/link";
import {MdNewReleases} from 'react-icons/md'
interface TableChapterProps {
  data: chaps[]
}


const Tablechapter: React.FC<TableChapterProps> = ({
  data
}) => {
  
 
  return (
    <div className="w-screen h-screen flex items-center">
          <div className="w-screen md:w-3/5 mx-auto h-5/6  mb-10 bg-slate-50 rounded-md overflow-y-scroll scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-width-thin">
  <p className="w-full h-16 flex items-center leading-2 bg-slate-100 font-bold text-xl mb-4 top-0 sticky">
    <span className="w-5/6 inline-block pl-4 md:pl-12 capitalize">Chapter</span>
    <span className="w-1/6 inline-block pr-4 md:pr-12 capitalize">Uploaded</span>
  </p>
  {data?.map((chap) => {
    const date = new Date(chap?.createdAt);
    const formattedDate = date.toLocaleDateString("en-US");
    const newName = chap?.name?.replace(/-/g, " ");

    const isNewRelease =
      Date.now() - Date.parse(date.toString()) < 24 * 60 * 60 * 1000; // check if the chapter is less than a day old

    return (
      <ul className="list-none" key={chap.id}>
        <li className="flex items-center py-4 border-t border-gray-200">
          <Link
            href={`/chapters/${chap?.id}`}
            className="flex w-5/6  px-4 md:px-12 text-base text-blue-700 hover:underline"
          >
            {newName} {isNewRelease && <MdNewReleases  color={"red"} />}
          </Link>
          <span className="w-1/6 inline-block pr-4 md:pr-12 ">{formattedDate}</span>
        </li>
      </ul>
    );
  })}
</div>
    </div>



  )
}
export default Tablechapter;