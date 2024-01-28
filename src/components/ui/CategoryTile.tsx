"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

type Props = {
  imgSrc: StaticImageData;
  title: string;
  value: string;
  width?: number;
  height?: number;
};

export default function CategoryTile({
  imgSrc,
  title,
  value,
  width = 384,
  height = 256,
}: Props) {
  return (
    <Link href={`/sklep/${value}`} className="relative overflow-hidden cursor-pointer group">
      <div className="aspect-4/3">
        <Image
          className="object-cover w-full h-full transition duration-500 rounded-lg group-hover:scale-110"
          width={width}
          height={height}
          src={imgSrc}
          loading="lazy"
          alt={title}
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-full transition duration-500 bg-black bg-opacity-10 rounded-2xl group-hover:bg-opacity-0">
        <div className="absolute w-7/12 px-4 py-6 transform -translate-x-1/2 rounded-lg bottom-4 bg-primary-300/80 left-1/2">
          <h3 className="text-xl font-medium text-center uppercase text-primary-900">
            <span className="flex items-center justify-center gap-2 select-none">
              {title}
              <ArrowUpRight />
            </span>
          </h3>
        </div>
      </div>
    </Link>
  );
}
