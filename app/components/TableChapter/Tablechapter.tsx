'use client';
import { useEffect } from "react";
import TableItems from "./Tableitems";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

const Tablechapter = () => {
  const isLoading = useSelector((state: RootState) => state?.chapter?.isLoading);

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-screen md:w-3/5 mx-auto h-5/6  mb-10 bg-slate-50 rounded-md overflow-y-scroll scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-width-thin">
        <p className="w-full h-16 flex items-center leading-2 bg-slate-100 font-bold text-xl mb-4 top-0 sticky">
          <span className="w-5/6 inline-block pl-4 md:pl-12 capitalize">Chapter</span>
          <span className="w-1/6 inline-block pr-4 md:pr-12 capitalize">Uploaded</span>
        </p>
        <ul className='pl-6 mt-4 space-y-2 w-full list-none'>
          <TableItems />
        </ul>
      </div>
    </div>
  )
}

export default Tablechapter;
