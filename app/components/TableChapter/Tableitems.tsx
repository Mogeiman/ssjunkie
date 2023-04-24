import { useEffect,SetStateAction,Dispatch } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { MdNewReleases } from "react-icons/md";
// import { fetchChapters } from "@/app/redux/Feature/countChapter/chapterSlice";
import { RootState } from "@/app/redux/store";
import { setChapters, setLoading, setError, setTotal } from "@/app/redux/Feature/countChapter/chapterSlice";
import getChapters from "@/app/actions/getChapters";

interface TableItemsProps {
  page: number,
  // setPage:  Dispatch<SetStateAction<number>>
}

const TableItems:React.FC<TableItemsProps> = ({
  page
}) => {
    const dispatch = useDispatch();
  
    const chapters = useSelector((state: RootState) => state?.chapter?.data);
    const isLoading = useSelector((state: RootState) => state?.chapter?.isLoading);
    const error = useSelector((state: RootState) => state?.chapter?.error);
  
    useEffect(() => {
      const fetchChapters = async () => {
        try {
          dispatch(setLoading());
          const response = await fetch(`/api/chapters/${page}`, { cache: 'no-store' });
          const {total, chapters} = await response.json();
          dispatch(setTotal(total))
          dispatch(setChapters(chapters));
        } catch (error: any) {
          dispatch(setError(error.toString()));
        }
      };
  
      fetchChapters();
    }, [,page]);
  
    if (isLoading) {
        return (
            <div>
            {[...Array(20).keys()].map((i) => {
              return (
                <li key={i}>
                  <span
                    className="inline-block h-5 animate-pulse w-full bg-slate-300"
                    style={{
                      animationDelay: `${i * 0.05}s`,
                      animationDuration: "1s",
                    }}
                  ></span>
                </li>
              );
            })}
          </div>
        );
      }
      
  
    if (error) {
      return <div>Error: {error}</div>;
    }
  
    return (
    <>
      {chapters?.map((chapter: any) => {
        const date = new Date(chapter?.createdAt);
        const formattedDate = date.toLocaleDateString("en-US");
        const newName = chapter?.name?.replace(/-/g, " ");

        const isNewRelease =
          Date.now() - Date.parse(date.toString()) < 24 * 60 * 60 * 1000;

        return (
          <li
            key={chapter.id}
            className="flex items-center py-4 border-t border-gray-200"
          >
            <Link
              href={`/chapters/${chapter.id}`}
              className="flex w-5/6  px-4 md:px-12 text-base text-blue-700 hover:underline"
            >
              {newName} {isNewRelease && <MdNewReleases color={"red"} />}
            </Link>
            <span className="w-1/6 inline-block pr-4 md:pr-12 ">
              {formattedDate}
            </span>
          </li>
        );
      })}
    </>
  );
};

export default TableItems;
