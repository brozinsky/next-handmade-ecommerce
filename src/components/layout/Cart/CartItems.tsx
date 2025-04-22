import React from "react";
import CartProduct from "./CartProduct";
import { ICartItem } from "@/utils/types";

const CartItems = ({ items }: { items: ICartItem[] }) => {
  return (
    <div className="md:w-8/12">
      <div className="flex flex-col items-start justify-between">
        <h1
          className="mb-2 text-xl font-medium text-neutral-900"
          id="slide-over-title"
        >
          Twój koszyk
        </h1>
        <ul role="list" className="w-full divide-y divide-gray-200">
          {items.map((item: ICartItem) => {
            return (
              <CartProduct
              color={item.color}
              key={item._id + item.color + item.name}
              _id={item._id}
              category={item.category}
              title={item.name}
              price={(item.oldPrice ?? item.price) * item.quantity}
              quantity={item.quantity}
              imgSrc={item.imageUrl || ""}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CartItems;
