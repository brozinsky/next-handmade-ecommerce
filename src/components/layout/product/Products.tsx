import React from "react";
import Product from "./Product";
import clsx from "clsx";
import HeadingLine from "@/components/ui/HeadingLine";
import Link from "next/link";
import { categories } from "@/utils/categories";
import { getProducts } from "../../../../sanity/sanity-utils";
import DropdownCategories from "@/components/modules/DropdownCategories";

export default async function Products({ category = "wszystkie" }) {
  const products = await getProducts();

  return (
    <section id="Featured" className="bg-white py-section min-h-screen-footer">
      <div className="container mx-auto space-y-8 container--xs">
        <div className="space-y-2 text-center">
          <HeadingLine textPosition="center">Produkty</HeadingLine>
          <DropdownCategories category={category} categories={categories} />
          <div className="flex-col items-center justify-center hidden gap-8 py-4 text-lg lg:flex lg:flex-row">
            {categories.map(({ title, value, id }) => {
              return (
                <Link
                  href={`/sklep/${value}`}
                  key={id}
                  prefetch={false}
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
                category === "wszystkie" ||
                product.categories[0].title.toLowerCase() ===
                  category.toLowerCase()
            )
            .sort((a, b) =>
              a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
            )
            .map((product) => {
              return (
                <Product
                  key={product._id}
                  _id={product._id}
                  imageUrl={product.imageUrl}
                  title={product.name}
                  category={product.categories[0].title.toLowerCase()}
                  price={product.price}
                  discountPrice={product.discountPrice}
                  isAvailable={product.isAvailable}
                  isNew={product.isNew}
                  isImmediate={product.isImmediate}
                  isCentered
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
