'use client';
import { useState } from "react";
import TableItems from "./Tableitems";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import Link from "next/link";

const Tablechapter = () => {
  const [page, setPage] = useState(1)
  const total = useSelector((state: RootState) => state?.chapter?.total);
  const pages = Math.ceil(total/40)

  return (
    <div className="w-screen h-screen flex items-center">
      <div className="w-screen md:w-3/5 mx-auto h-5/6  mb-10 bg-slate-50 rounded-md overflow-y-scroll scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-width-thin">
        <p className="w-full h-16 flex items-center leading-2 bg-slate-100 font-bold text-xl mb-4 top-0 sticky">
          <span className="w-5/6 inline-block pl-4 md:pl-12 capitalize">Chapter</span>
          <span className="w-1/6 inline-block pr-4 md:pr-12 capitalize">Uploaded</span>
        </p>
        <ul className='pl-6 mt-4 space-y-2 w-full list-none'>
          <TableItems page={page}/>
        </ul>
        <div className="w-full h-16 flex items-center justify-end leading-2 bg-slate-100 font-bold text-xl mb-4 bottom-0 sticky">
          <p>Choose Page</p>
        <select className="w-15 h-10 mx-2 border-gray-400 rounded-sm text-center" onChange={(e)=> setPage(parseInt(e.target.value))}>
          <option>
              
          </option>
      {[...Array(pages).keys()].map((n) => (
        <option key={n} value={n+1}>
          {n+1}
        </option>
      ))}
    </select>
        </div>
      </div>

    </div>
  )
}

export default Tablechapter;
