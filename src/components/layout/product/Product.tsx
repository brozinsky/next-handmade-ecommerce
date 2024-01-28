"use client";
import Button from "@/components/ui/Button";
import useCartStore from "@/stores/useCartStore";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeadbandImg from "@/public/opaski-1.jpg";
import { products } from "@/utils/products";
import { Product } from "@/utils/types";

type Props = Product & {
  discountPrice?: number | null;
  isNew?: boolean;
};

type CartItem = Product & {
  quantity: number;
};

export default function Product({
  id,
  title,
  category,
  price,
  discountPrice,
  description,
  isAvailable = true,
  isNew = false,
  isImmediate = false,
}: Props) {
  const { addItem } = useCartStore();
  const href = {
    pathname: `/sklep/produkt/${id}`,
    query: { title, price, id, category },
  };
  return (
    <div className="xs:max-w-[300px] w-full mx-auto flex flex-col overflow-hidden transition rounded-md shadow-none group hover:shadow-default">
      <Link
        href={href}
        className="relative w-full h-56 overflow-hidden bg-white border cursor-pointer aspect-square"
      >
        {/* {isNew && isAvailable && (
          <div className="absolute top-0 right-0 z-10 w-16 h-16">
            <div className="absolute transform rotate-45 bg-sky-200 text-center text-sky-900 font-medium py-1 left-[-68px] top-[32px] w-[170px]">
              Nowość
            </div>
          </div>
        )} */}
        {!isAvailable && (
          <div className="absolute z-10 flex items-center justify-center px-5 py-5 text-center transform -translate-x-1/2 -translate-y-1/2 rounded-md font-regular bg-white/70 h-fit w-fit text-neutral-600 top-1/2 left-1/2">
            Wyprzedane
          </div>
        )}
        {isImmediate && isAvailable && (
          <span className="absolute z-10 px-6 py-1 text-yellow-900 bg-yellow-200 rounded-md font-regular text-md top-1 left-1">
            Dostępne od ręki
          </span>
        )}
        {isNew && isAvailable && (
          <span className="absolute z-10 px-6 py-1 rounded-md font-regular text-md bg-sky-200 text-sky-900 top-2 left-2">
            Nowość
          </span>
        )}
        {discountPrice && discountPrice >= 0 && isAvailable && (
          <span className="absolute z-10 px-6 py-1 rounded-md font-regular text-md bg-rose-200 text-rose-800 top-2 left-2">
            Promocja!
          </span>
        )}
        <Image
          src={HeadbandImg}
          alt=""
          className={clsx(
            !isAvailable && "opacity-30",
            "object-cover w-full h-auto transition duration-500 bg-gray-200 aspect-square group-hover:scale-110"
          )}
          width={261}
          height={261}
        />
      </Link>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div>
          <Link href={href}>
            <h3 className="mb-2 text-xl font-medium leading-tight text-center">
              {title}
            </h3>
          </Link>
          {description && description.length > 0 && (
            <p className="mb-2 font-light leading-tight text-center line-clamp-2 text-neutral-500">
              {description}
            </p>
          )}
          <div className="flex flex-wrap items-end justify-center space-x-2 text-xs text-neutral-600">
            {discountPrice ? (
              <span className="text-sm line-through text-primary-900">
                {price}.00 <span>zł</span>
              </span>
            ) : null}
            {discountPrice ? (
              <span className="text-xl font-medium text-red-500">
                {discountPrice}.00 <span>zł</span>
              </span>
            ) : (
              <span className="text-xl font-medium text-center text-primary-900">
                {price}.00 <span>zł</span>
              </span>
            )}
          </div>
        </div>
        <div className="mx-auto mt-4">
          <Button
            onClick={() => {
              const productToAdd = products.find(
                (product) => product.id === id
              );
              if (productToAdd) {
                addItem(productToAdd as CartItem, 1);
              }
            }}
            variant="primary"
            shape="rectangle"
          >
            Dodaj do koszyka
          </Button>
        </div>
      </div>
    </div>
  );
}
