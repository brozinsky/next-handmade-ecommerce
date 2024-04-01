"use client";
import React from "react";
import useCartStore from "@/stores/useCartStore";
import CartEmpty from "./CartEmpty";
import CartSummary from "./CartSummary";
import { TShippingInfo } from "@/utils/types";
import CartItems from "./CartItems";

export default function CartSection({
  shippingInfo,
}: {
  shippingInfo: TShippingInfo;
}) {
  const { items } = useCartStore();

  if (!items || items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <section className="py-section min-h-screen-footer">
      <div className="container container--xs ">
        <div className="flex flex-col gap-8 md:gap-20 md:flex-row ">
          <CartItems items={items}/>
          <CartSummary shippingInfo={shippingInfo}/>
        </div>
      </div>
    </section>
  );
}
