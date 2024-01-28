import React from "react";
import CartProduct from "./CartProduct";
import Button from "@/components/ui/Button";
import PageWrapper from "@/components/utils/PageWrapper";
import useCartStore from "@/stores/useCartStore";
import EmptyCartSVG from "@/public/empty-cart.svg";
import Image from "next/image";
import Link from "next/link";

export default function CartSection() {
  const { items } = useCartStore();

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
                {items.map((item) => (
                  <CartProduct
                    key={item.id}
                    id={item.id}
                    category={item.category}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    imgSrc={
                      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                    }
                  />
                ))}
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
              <div className="flex flex-col h-full bg-white">
                <div className="py-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Dostawa</p>
                    <p>15.00 zł</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Kurier DHL</p>
                </div>
                <div className="py-6 border-t border-gray-200">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Suma</p>
                    <p>262.00 zł</p>
                  </div>
                  {/* <p className="mt-0.5 text-sm text-gray-500">
                            Shipping and taxes calculated at checkout.
                          </p> */}
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
