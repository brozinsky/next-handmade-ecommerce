"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import useMenuTabsStore from "../../stores/useMenuTabsStore";

type Props = {
  imgSrc: StaticImageData;
  title: string;
  width: number;
  height: number;
  span?: number;
  tabId: number;
};

export default function CategoryTile({
  imgSrc,
  title,
  width = 384,
  height = 256,
  span = 1,
  tabId,
}: Props) {
  const { setTab } = useMenuTabsStore();

  return (
    <div className="flex flex-row overflow-hidden transition rounded-md shadow-none bg-primary-100 group hover:shadow-default">
      <div className="w-1/2 h-full overflow-hidden cursor-pointer">
      <Image
          className="w-full h-full transition duration-500 group-hover:scale-110"
          width={width}
          height={height}
          src={imgSrc}
          loading="lazy"
          alt={title}
        />
      </div>
      <div className="relative flex flex-col justify-center w-1/2 p-8 items-left">
        <h3 className="mb-2 text-2xl font-medium text-neutral-700">{title}</h3>
        <Link
          href={"/menu#menu"}
          className="z-30 flex flex-row items-center gap-1 text-base font-normal text-neutral-600 md:text-xl hover:underline"
        >
          Przejdź{" "}
          <svg
            className="w-3.5 h-3.5 ms-2 rtl:rotate-180 translate-x-0 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>

    // <div
    //   onClick={() => setTab(tabId)}
    //   className={clsx(
    //     "overflow-hidden group relative w-full h-full group",
    //     span === 2 && "row-span-2"
    //   )}
    // >
    //   <Image
    //     className="w-full h-full transition duration-500 group-hover:scale-110"
    //     width={width}
    //     height={height}
    //     src={imgSrc}
    //     loading="lazy"
    //     alt={title}
    //   />
    //   <Link href={"/menu#menu"}>
    //     <span className="absolute top-0 left-0 z-10 w-full h-full transition duration-500 opacity-0 bg-gradient-to-r from-black group-hover:opacity-50"></span>
    //   </Link>
    //   <span className="absolute z-10 flex items-center gap-1 transition duration-300 translate-y-24 bottom-10 md:bottom-14 ease group-hover:translate-y-0 left-4 md:left-8">
    //     <span className="z-30 text-xl md:text-4xl">{title}</span>
    //   </span>
    //   <span className="absolute z-10 flex items-center gap-1 transition duration-300 delay-75 translate-y-14 bottom-4 md:bottom-6 ease group-hover:translate-y-0 left-4 md:left-8">
    // <Link
    //   href={"/menu#menu"}
    //   className="z-30 flex flex-row items-center gap-1 text-base md:text-xl hover:underline"
    // >
    //   Discover{" "}
    //   <svg
    //     className="w-3.5 h-3.5 ms-2 rtl:rotate-180 translate-x-0 "
    //     aria-hidden="true"
    //     xmlns="http://www.w3.org/2000/svg"
    //     fill="none"
    //     viewBox="0 0 14 10"
    //   >
    //     <path
    //       stroke="currentColor"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       strokeWidth="2"
    //       d="M1 5h12m0 0L9 1m4 4L9 9"
    //     />
    //   </svg>
    // </Link>
    //   </span>

    // </div>
  );
}
