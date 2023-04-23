'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import { setChapters } from "@/app/redux/Feature/countChapter/chapterSlice";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
const Hero = () => {
  const chapters = useSelector((state: RootState) => state?.chapter?.data);


  return (
    <section className="w-full h-screen md:h-[600px]  bg-slate-700 z-10">
      <div className="grid items-center w-full h-full ">
        <div className="flex flex-col mt-6  md:flex-row gap-10 w-full md:w-4/5 md:mx-auto px-4  items-center  justify-between md:justify-start">
          <div className="w-52 h-64 md:w-[300px] md:h-[400px] relative ">
            <Image
              src="/images/profile.jpg"
              fill
              alt="profile"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          <div className="text-white w-full md:w-3/5 ">
            <div className="mb-5 ">
              <h1 className="font-semibold text-2xl md:text-5xl ">
                Shadow Slave
              </h1>
              <span className="font-light text-sm">Author: Guilty three</span>
            </div>
            <div className="flex flex-row md:flex-col gap-3">
              <div className="flex gap-5 flex-col md:flex-row mb-1">
                <div className="">
                  <h3 className="text-lg md:text-xl font-medium mb-3">
                    Chapters
                  </h3>
                  <div className="flex gap 5 items-center">
                    <Image
                      width={20}
                      height={20}
                      alt="bookOutline"
                      src="/images/book-white.svg"
                      className="ml-1 fill-white stroke-white mr-2"
                    />
                    <span className="text-lg text-cyan-300">{chapters && chapters.length}</span>
                  </div>
                </div>
                <div className="">
                  <h3 className="text-lg md:text-xl font-medium mb-3">
                    Category
                  </h3>
                  <div className="flex gap-5 flex-col md:flex-row">
                    <div className="flex items-center justify-center w-16 h-8 md:w-20 md:h-8  bg-indigo-600 rounded-xl">
                      <h3 className="text-base font-medium capitalize text-slate-50">
                        Fantasy
                      </h3>
                    </div>
                    <div className="flex items-center justify-center w-16 h-8 md:w-20 md:h-8  bg-indigo-600 rounded-xl">
                      <h3 className="text-base font-medium capitalize text-slate-50">
                        Action
                      </h3>
                    </div>
                    <div className="flex items-center justify-center w-16 h-8 md:w-20 md:h-8  bg-indigo-600 rounded-xl">
                      <h3 className="text-base font-medium capitalize text-slate-50">
                        Action
                      </h3>
                    </div>
                    <div className="flex items-center justify-center w-16 h-8 md:w-20 md:h-8  bg-indigo-600 rounded-xl">
                      <h3 className="text-base font-medium capitalize text-slate-50">
                        Romance
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-medium mb-3">Summary</h1>
                <p className="font-medium mt-3 ml-3 text-xs md:text-base">
                  Growing up in poverty, Sunny never expected anything good from
                  life. However, even he did not anticipate being chosen by the
                  Nightmare Spell and becoming one of the Awakened - an elite
                  group of people gifted with supernatural powers. Transported
                  into a ruined magical world, he found himself facing against
                  terrible monsters - and other Awakened - in a deadly battle of
                  survival.What is worse, the divine power he received happened
                  to possess a small, but potentially fatal side effect...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;