"use client";
import React, { useEffect, useMemo, useState } from "react";
import CartProduct from "./CartProduct";
import Button from "@/components/ui/Button";
import useCartStore from "@/stores/useCartStore";
import Select from "@/components/ui/Select/Select";
import CartEmpty from "./CartEmpty";
import { calculateTotalCost, transformShippingOptions } from "@/utils/function";

type TShippingInfo = {
  name: string;
  slug: string;
  price: number;
};

export default function CartSection({
  shippingInfo,
}: {
  shippingInfo: TShippingInfo;
}) {
  const { items } = useCartStore();

  const shippingOptions = transformShippingOptions(shippingInfo);
  const [shipping, setShipping] = useState<string>(shippingOptions[0].value);
  const [shippingPrice, setShippingPrice] = useState<number>(
    shippingOptions.length > 0 ? shippingOptions[0].price : 0
  );
  const totalCost = useMemo(
    () => calculateTotalCost(items, shippingPrice),
    [items, shippingPrice]
  );

  useEffect(() => {
    const newPrice = shippingOptions.find(
      (option: any) => option.value === shipping
    )?.price;
    if (newPrice !== undefined) {
      setShippingPrice(newPrice);
    }
  }, [shipping, shippingOptions]);

  if (!items || items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <section className="py-section min-h-screen-footer">
      <div className="container container--xs ">
        <div className="flex flex-row gap-20 ">
          <div className="w-8/12">
            <div className="flex flex-col items-start justify-between">
              <h1
                className="mb-2 text-xl font-medium text-neutral-900"
                id="slide-over-title"
              >
                Twój koszyk
              </h1>
              <ul role="list" className="w-full divide-y divide-gray-200">
                {items.map((item) => {
                  return (
                    <CartProduct
                      color={item.color}
                      key={item._id + item.color + item.name}
                      _id={item._id}
                      category={item.category}
                      title={item.name}
                      price={item.price * item.quantity}
                      quantity={item.quantity}
                      imgSrc={item.imageUrl || ""}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="w-4/12">
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
        </div>
      </div>
    </section>
  );
}
