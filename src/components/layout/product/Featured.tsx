"use client";
import React, { useState } from "react";
import Product from "./Product";
import Separator from "@/components/utils/Separator";
import clsx from "clsx";
import HeadingLine from "@/components/ui/HeadingLine";
import { X, Loader, ArrowUpRight } from "react-feather";
import HeadlingLineWithLink from "@/components/ui/HeadlingLineWithLink";
import { products } from "@/utils/products";

export default function Featured() {
  const [filterValue, setFilterValue] = useState("wszystkie");
  return (
    <section className="bg-white pt-section pb-section-half">
      <div className="container mx-auto space-y-8 container--xs">
        <div className="space-y-2 text-center">
          <HeadlingLineWithLink>Wybrane produkty</HeadlingLineWithLink>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {[...products]
            .filter(
              (product) =>
                filterValue === "wszystkie" || product.category === filterValue
            )
            .sort((a, b) =>
              a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
            )
            .slice(0, 4)
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })}
        </div>
      </div>
    </section>
  );
}
