"use client";
import React, { useState } from "react";
import Product from "./Product";
import Separator from "@/components/utils/Separator";
import clsx from "clsx";
import HeadingLine from "@/components/ui/HeadingLine";

const products = [
  {
    id: 1,
    title: "Opaska typ 1",
    category: "opaski",
    price: 15,
    discountPrice: null,
    description:
      "Ręcznie wykonana opaska z przędzy bawełnianej T-shirt yarn typu premium. <br> Szerokość opaski – 3 cm. <br> Wygodna, bez uciskowa. <br> Róźne kolory do wyboru, zdjęcia znajdują się w galerii.",
    isAvailable: true,
    isNew: false,
    isImmidiate: true,
  },
  {
    id: 2,
    title: "Opaska 2",
    category: "opaski",
    price: 15,
    discountPrice: null,
    description: "",
    isAvailable: true,
    isNew: false,
    isImmidiate: true,
  },
  {
    id: 22,
    title: "Opaska typ 3",
    category: "opaski",
    price: 18,
    discountPrice: null,
    description: "",
    isAvailable: true,
    isNew: false,
    isImmidiate: true,
  },
  {
    id: 3,
    title: "Torebka 1",
    category: "plecaki",
    price: 90,
    description: "",
    isAvailable: false,
    isNew: false,
    isImmidiate: false,
  },
  {
    id: 4,
    title: "Torebka 2",
    category: "plecaki",
    price: 80,
    discountPrice: null,
    description: "",
    isAvailable: true,
    isNew: true,
    isImmidiate: false,
  },
  {
    id: 5,
    title: "Plecak",
    category: "plecaki",
    price: 120,
    discountPrice: 18,
    description: "",
    isAvailable: true,
    isNew: false,
    isImmidiate: false,
  },
  {
    id: 6,
    title: "Koszyk z ażurowym wieczkiem",
    category: "koszyki",
    price: 60,
    discountPrice: null,
    description:
      "Ręcznie wykonany koszyk ze sznurka bawełnianego z ażurowym wieczkiem oraz mocnym spodem z drewnianej sklejki. <br> Idealny do przechowywania różnych rzeczy lub na prezent. <br> Średnica koszyka 20 cm.",
    isAvailable: true,
    isNew: false,
    isImmidiate: false,
  },
];

const categories = [
  { id: 0, value: "wszystkie", title: "Wszystkie" },
  { id: 1, value: "opaski", title: "Opaski" },
  { id: 2, value: "plecaki", title: "Torebki i plecaki" },
  { id: 3, value: "koszyki", title: "Koszyki" },
  { id: 4, value: "swiece", title: "Świece" },
  { id: 5, value: "inne", title: "Inne" },
];

export default function Products() {
  const [filterValue, setFilterValue] = useState("wszystkie");
  return (
    <section className="bg-white py-section">
      <div className="container p-6 mx-auto space-y-8 container--sm">
        <div className="space-y-2 text-center">
          <HeadingLine textPosition="center">Produkty</HeadingLine>
          {/* <p className="font-serif text-sm dark:text-gray-400">
            Qualisque erroribus usu at, duo te agam soluta mucius.
          </p> */}
          {/* <Separator /> */}
          <div className="flex flex-row items-center justify-center gap-8 py-4 text-lg">
            {categories.map(({ title, value, id }) => {
              return (
                <div
                  onClick={() => setFilterValue(value)}
                  key={id}
                  role="button"
                  className={clsx(
                    filterValue == value &&
                      "border-primary-500 text-primary-500 hover:text-primary-500 border-t-2 border-b-2",
                    "select-none py-1.5 text-neutral-600 cursor-pointer hover:text-black transition"
                  )}
                >
                  {title}
                </div>
              );
            })}
            {/* <div className="py-1.5">Plecaki i torebki</div>
            <div className="py-1.5">Koszyki</div>
            <div className="py-1.5">Świece</div>
            <div className="py-1.5">Inne</div> */}
          </div>
          {/* <Separator /> */}
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
            .map((product) => {
              return <Product key={product.id} {...product} />;
            })}
        </div>
      </div>
    </section>
  );
}
