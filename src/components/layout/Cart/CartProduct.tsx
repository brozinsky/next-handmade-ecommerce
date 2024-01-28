import React from "react";
import HeadbandImg from "@/public/opaski-1.jpg";
import Image from "next/image";
import clsx from "clsx";
import useCartStore from "@/stores/useCartStore";
import Link from "next/link";
import { Product } from "@/utils/types";

type Props = Product & {
  imgSrc: string;
  quantity: number;
};

export default function CartProduct({ id, title, price, imgSrc, quantity, category }: Props) {
  const { incrementItemQuantity, decrementItemQuantity, removeItem } =
    useCartStore((state) => ({
      incrementItemQuantity: state.incrementItemQuantity,
      decrementItemQuantity: state.decrementItemQuantity,
      removeItem: state.removeItem,
    }));
  const href = {
    pathname: `/sklep/produkt/${id}`,
    query: { title, price, id, category },
  };
  return (
    <li className="flex gap-4 py-6">
      <Link href={href} className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md ">
        <Image
          src={HeadbandImg}
          alt={title}
          className={clsx("object-cover object-center w-full h-full")}
          width={94}
          height={94}
        />
      </Link>
      <div className="flex flex-col flex-1">
        <div>
          <div className="flex justify-between gap-4 text-base font-medium text-neutral-900">
            <h3>
              <Link href={href}>{title}</Link>
            </h3>
            <p className="text-right min-w-20">{price}.00 zł</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Dostawa w 2 tygodnie</p>
        </div>
        <div className="flex items-end justify-between flex-1 text-sm">
          <div className="gap-2 flex-center-center">
            <div
              onClick={() => decrementItemQuantity(id)}
              className="w-4 h-4 text-gray-500 transition transform border rounded-md cursor-pointer select-none flex-center-center hover:bg-gray-100 active:translate-y-1"
            >
              -
            </div>
            <p className="w-10 text-center text-gray-500 select-none">
              {quantity} szt
            </p>
            <div
              onClick={() => incrementItemQuantity(id)}
              className="w-4 h-4 text-gray-500 transition border rounded-md cursor-pointer select-none flex-center-center hover:bg-gray-100 active:translate-y-1"
            >
              +
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() => removeItem(id)}
              type="button"
              className="font-medium text-red-600 hover:text-red-500"
            >
              Usuń
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
