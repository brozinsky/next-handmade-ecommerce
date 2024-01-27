"use client";
import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import Link from "next/link";
import useMenuTabsStore from "../../stores/useMenuTabsStore";
import Button from "./Button";
import { X, Loader, ArrowRight, ArrowUpRight } from "react-feather";

type Props = {
  imgSrc: StaticImageData;
  title: string;
  width?: number;
  height?: number;
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
    <div className="relative overflow-hidden cursor-pointer group">
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
            <span className="flex items-center justify-center gap-2">
              {title}
              <ArrowUpRight />
            </span>
          </h3>
          {/* <button className="w-full px-6 py-3 text-xs font-medium text-white border rounded-full lg:text-md btn-zoom">
            Przejdź
          </button> */}
          {/* <Button onClick={() => console.log('klik')} variant="primary" shape="rectangle">
            <span className="flex items-center gap-2">Przejdź <ArrowUpRight className="h-4"/></span>
          </Button> */}
        </div>
      </div>
    </div>
  );
}
