"use client";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select/Select";
import useCartStore from "@/stores/useCartStore";
import { calculateTotalCost, transformShippingOptions } from "@/utils/function";
import { TInputOption } from "@/utils/types";
import React, { useMemo } from "react";

type TProps = {
  shipping: string;
  setShipping: React.Dispatch<React.SetStateAction<string>>;
  shippingOptions: TInputOption[];
  shippingPrice: number;
};

const CartSummary = ({
  shipping,
  setShipping,
  shippingOptions,
  shippingPrice,
}: TProps) => {
  const { items } = useCartStore();

  const totalCost = useMemo(
    () => calculateTotalCost(items, shippingPrice),
    [items, shippingPrice]
  );

  return (
    <div className="flex flex-col items-start justify-between">
      <h2
        className="mb-4 text-xl font-medium text-neutral-900"
        id="slide-over-title"
      >
        Podsumowanie
      </h2>
      <div className="flex flex-col w-full h-full bg-white">
        <div className="py-6">
          <div className="flex justify-between mb-2 text-base font-medium text-gray-900">
            <p>Dostawa</p>
            <p>{`${shippingPrice.toFixed(2).replace(".", ",")} zł`}</p>
          </div>
          <Select
            options={shippingOptions}
            state={shipping}
            setState={setShipping}
          />
        </div>
        <div className="py-6 border-t border-gray-200">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Suma</p>
            <p>{`${totalCost.toFixed(2).replace(".", ",")} zł`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
