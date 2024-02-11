"use client";
import React, { useEffect } from "react";
import Product from "./Product";
import clsx from "clsx";
import HeadingLine from "@/components/ui/HeadingLine";
import Link from "next/link";
import { categories } from "@/utils/categories";
import { products } from "@/utils/products";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import useProductsQuery from "@/stores/useProductsQuery";
import ProductSkeleton from "./ProductSkeleton";

export default function Products({ category = "wszystkie" }) {
  const { products, isLoadingProducts } = useProductsQuery();

  return (
    <section id="Products" className="bg-white py-section">
      <div className="container mx-auto space-y-8 container--xs">
        <div className="space-y-2 text-center">
          <HeadingLine textPosition="center">Produkty</HeadingLine>
          {/* <p className="font-serif text-sm dark:text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p> */}
          {/* <Separator /> */}
          <div className="flex flex-row items-center justify-center gap-8 py-4 text-lg">
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
          {isLoadingProducts &&
            [...Array(8)].map((_, index) => <ProductSkeleton key={index} />)}
          {!isLoadingProducts &&
            products.data
              .sort((a, b) =>
                a.attributes.isAvailable === b.attributes.isAvailable
                  ? 0
                  : a.attributes.isAvailable
                  ? -1
                  : 1
              )
              .filter(
                (product) =>
                  category === "wszystkie" || product.attributes
                  .category === category
              )
              .map((product) => {
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    title={product.attributes.title}
                    category={product.attributes.category}
                    price={product.attributes.price}
                    discountPrice={product.attributes.discountPrice}
                    isAvailable={product.attributes.isAvailable}
                    isNew={product.attributes.isNew}
                    isImmediate={product.attributes.isImmediate}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}
