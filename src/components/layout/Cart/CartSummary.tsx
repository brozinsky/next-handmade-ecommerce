"use client";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select/Select";
import useCartStore from "@/stores/useCartStore";
import { calculateTotalCost, transformShippingOptions } from "@/utils/function";
import { TShippingInfo } from "@/utils/types";
import React, { useEffect, useMemo, useState } from "react";

const CartSummary = ({ shippingInfo }: {shippingInfo: TShippingInfo}) => {
  const { items } = useCartStore();
  const shippingOptions = transformShippingOptions(shippingInfo);
  const [shippingPrice, setShippingPrice] = useState<number>(
    shippingOptions.length > 0 ? shippingOptions[0].price : 0
  );
  const [shipping, setShipping] = useState<string>(shippingOptions[0].value);

  useEffect(() => {
    const newPrice = shippingOptions.find(
      (option: any) => option.value === shipping
    )?.price;
    if (newPrice !== undefined) {
      setShippingPrice(newPrice);
    }
  }, [shipping, shippingOptions]);

  const totalCost = useMemo(
    () => calculateTotalCost(items, shippingPrice),
    [items, shippingPrice]
  );

  return (
    <div className="max-w-96 md:w-4/12">
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
            <div className="mt-6">
              <Button isFullWidth variant="primary" shape="rectangle">
                Złóż zamówienie
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
