import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "react-feather";

type Props = {
  children: React.ReactNode;
  textPosition?: "left" | "right" | "center";
};

export default function HeadlingLineWithLink({ children }: Props) {
  return (
    <div className="flex flex-col items-center gap-2 mb-8 sm:gap-8 sm:flex-row">
      <h2 className={clsx("left heading-second text-primary-800")}>
        {children}
      </h2>
      <span className="flex-1 h-px bg-primary-800 center"></span>
      <Link href="/sklep" className="mx-auto text-xl">
        <span className="flex items-center justify-center gap-2 text-neutral-600 hover:underline hover:text-primary-500">
          Zobacz wszystkie <ArrowUpRight />
        </span>
      </Link>
    </div>
  );
}
