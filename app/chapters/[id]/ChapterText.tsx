import { chaps } from "@prisma/client";
import Link from "next/link";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { BiHome } from "react-icons/bi";
interface ChapterTextProps {
  data: chaps;

}
const ChapterText: React.FC<ChapterTextProps> = ({ data }) => {
  const newName = data?.name?.replace(/-/g, " ");

  return (
    <div className="w-full md:w-4/5 lg:w-3/5 h-full bg-slate-50 mx-auto landscape:w-full">
      <div className="w-5/6 h-full mx-auto">
        <h1 className="mb-10 pt-10 font-semibold text-3xl">{newName}</h1>
        {data?.text?.map((paragraph: any, index: any) => (
          <p
            key={index}
            className="font-regular leading-8 pb-5 text-slate-950 text-xl select-none"
          >
            {paragraph}
          </p>
        ))}
        <div className="flex justify-evenly items-center pb-10">
          <Link
            className={`flex items-center justify-evenly gap-2 border-2 p-2 rounded-full text-slate-500 bg-slate-50 hover:bg-slate-600 hover:text-slate-50 transition-colors ease-in-out duration-500 h-12 px-6 ${
              !data.prev && "opacity-50 pointer-events-none"
            }`}
            href={`/chapters/${data?.prev}`}
          >
            <MdNavigateBefore />
            <h3 className="capitalize">Prev</h3>
          </Link>
          <Link
            className='flex items-center justify-evenly gap-2 border-2 cursor-pointer hover:scale rounded-full text-slate-500 hover:bg-slate-600 hover:text-slate-50 transition-colors ease-in-out duration-500 h-12 px-6'
            href="/"
          >
            <BiHome />
            <h3 className="capitalize">Home</h3>
          </Link>
          <Link
            className={`flex items-center justify-evenly gap-2 border-2 cursor-pointer hover:scale rounded-full text-slate-500 hover:bg-slate-600 hover:text-slate-50 transition-colors ease-in-out duration-500 h-12 px-6 ${
              !data.next && "opacity-50 pointer-events-none"
            }`}
            href={`/chapters/${data?.next}`}
          >
            <h3 className="capitalize">Next</h3>
            <MdNavigateNext />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ChapterText;
