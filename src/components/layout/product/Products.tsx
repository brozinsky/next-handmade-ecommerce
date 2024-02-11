'use client'
import React from "react";
import Product from "./Product";
import clsx from "clsx";
import HeadingLine from "@/components/ui/HeadingLine";
import Link from "next/link";
import { categories } from "@/utils/categories";
import { products } from "@/utils/products";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import { usePathname } from 'next/navigation'

export default function Products({ category = "wszystkie" }) {
  const pathname = usePathname()

  const currentPath = pathname.split('/').pop().toLowerCase().replace(/^\w/, c => c.toUpperCase())
  const dropdownName = currentPath === "Sklep" ? "Wszystkie" : currentPath

  return (
    <section id="Featured" className="bg-white py-section">
      <div className="container mx-auto space-y-8 container--xs">
        <div className="space-y-2 text-center">
          <HeadingLine textPosition="center">Produkty</HeadingLine>
          {/* <p className="font-serif text-sm dark:text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p> */}
          {/* <Separator /> */}
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
          <div className="flex-col items-center justify-center hidden gap-8 py-4 text-lg lg:flex lg:flex-row">
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
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {[...products]
            .filter(
              (product) =>
                category === "wszystkie" || product.category === category
            )
            .sort((a, b) =>
              a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
            )
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })}
        </div>
      </div>
    </section>
  );
}
