import React from "react";
import Image from "next/image";
import clsx from "clsx";
import useCartStore from "@/stores/useCartStore";
import Link from "next/link";
import { TProduct } from "@/utils/types";
import { FiTrash } from "react-icons/fi";

type TProps = TProduct & {
  imgSrc: string;
  quantity: number;
  color?: string;
};

export default function CartProduct({
  _id,
  title,
  price,
  imgSrc,
  quantity,
  category,
  color,
}: TProps) {
  const { incrementItemQuantity, decrementItemQuantity, removeItem } =
    useCartStore((state) => ({
      incrementItemQuantity: state.incrementItemQuantity,
      decrementItemQuantity: state.decrementItemQuantity,
      removeItem: state.removeItem,
    }));

  const handleCartItem = (
    variant: "increment" | "decrement" | "remove",
    title: string,
    color?: string
  ) => {
    variant === "increment" &&
      incrementItemQuantity(color ? `${title} ${color}` : (title));
    variant === "decrement" &&
      decrementItemQuantity(color ? `${title} ${color}` : (title));
    variant === "remove" &&
      removeItem(color ? `${title} ${color}` : (title));
  };
  const href = {
    pathname: `/sklep/produkt/${_id}`,
    query: { title, price, _id, category },
  };
  return (
    <li className="flex gap-4 py-6">
      <Link
        href={href}
        className="self-center overflow-hidden border border-gray-200 rounded-md w-[20vw] h-[20vw] sm:w-24 sm:h-24 aspect-square sm:flex-shrink-0 "
      >
        <Image
          src={imgSrc}
          alt={title || ""}
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
            <p className="text-right min-w-20">{`${price
              .toFixed(2)
              .replace(".", ",")} zł`}</p>
          </div>
        </div>
        {color && <div>Kolor: {color}</div>}
        <div className="flex items-end justify-between flex-1 text-sm">
          <div className="gap-2 flex-center-center">
            <div
              onClick={() =>
                handleCartItem("decrement", title || "Produkt", color)
              }
              className="w-4 h-4 text-gray-500 transition transform border rounded-md cursor-pointer select-none flex-center-center hover:bg-gray-100 active:translate-y-1"
            >
              -
            </div>
            <p className="w-10 text-center text-gray-500 select-none">
              {quantity} szt
            </p>
            <div
              onClick={() =>
                handleCartItem("increment", title || "Produkt", color)
              }
              className="w-4 h-4 text-gray-500 transition border rounded-md cursor-pointer select-none flex-center-center hover:bg-gray-100 active:translate-y-1"
            >
              +
            </div>
          </div>
          <div className="flex">
            <button
              onClick={() =>
                handleCartItem("remove", title || "Produkt", color)
              }
              className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium rounded-md hover:bg-red-100/40 group"
            >
              <div className="text-red-600 mr-0 w-0 -translate-x-[100%] opacity-0 transition-all duration-200 md:group-hover:mr-1 md:group-hover:w-5 md:group-hover:translate-x-0 md:group-hover:opacity-100">
                <FiTrash />
              </div>
              <span className="text-red-600">Usuń</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
