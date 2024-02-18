"use client";
import React from "react";
import Dropdown from "../ui/Dropdown";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

interface CategoryType {
  title: string;
  value: string;
  id: number;
}

interface PropsType {
  categories: CategoryType[];
  category: string;
}

export default function DropdownCategories({categories, category}: PropsType) {
  const pathname = usePathname();

  const currentPath = pathname
    .split("/")
    .pop()
    ?.toLowerCase()
    .replace(/^\w/, (c) => c.toUpperCase()) ?? "";

    const dropdownName = currentPath === "Sklep" ? "Wszystkie" : currentPath;

  return (
    <Dropdown
      classes="lg:hidden"
      isCenter
      trigger={
        <Button icon="arrow-down" variant="outlined-no-hover" shape="rectangle">
          {dropdownName}
        </Button>
      }
    >
      <div className="flex flex-col items-center justify-center gap-8 py-4 mx-auto overflow-hidden text-lg bg-white rounded-md shadow-2xl">
        {categories.map(({ title, value, id }) => {
          return (
            <Link
              href={`/sklep/${value}`}
              key={id}
              role="button"
              className={clsx(
                category == value &&
                  "border-primary-500 text-primary-500 hover:text-primary-500 border-t-2 border-b-2",
                "select-none py-1.5 text-neutral-600 cursor-pointer hover:text-black transition"
              )}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </Dropdown>
  );
}
