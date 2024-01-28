import React from "react";
import CartProduct from "./CartProduct";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  return (
    <div
      className="relative z-10 "
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* <!--
    Background backdrop, show/hide based on slide-over state.

    Entering: "ease-in-out duration-500"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in-out duration-500"
      From: "opacity-100"
      To: "opacity-0"
  --> */}
      <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"></div>

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 mt-[72px] pointer-events-none">
            {/* <!--
          Slide-over panel, show/hide based on slide-over state.

          Entering: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-full"
            To: "translate-x-0"
          Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
            From: "translate-x-0"
            To: "translate-x-full"
        --> */}
            <div className="w-screen max-w-md pointer-events-auto">
              <div className="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      className="text-xl font-medium text-gray-900"
                      id="slide-over-title"
                    >
                      Twój koszyk
                    </h2>
                    <div className="flex items-center ml-3 h-7">
                      <button
                        type="button"
                        className="relative p-2 -m-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        <CartProduct
                          id={1}
                          title={"Opaska typ 1"}
                          price={32}
                          imgSrc={
                            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                          }
                        />
                        <CartProduct
                          id={2}
                          title={"TorebkaTor ebkaToea typ 2"}
                          price={25}
                          imgSrc={
                            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                          }
                        />
                        <CartProduct
                          id={2}
                          title={"TorebkaTor  typ 2"}
                          price={25}
                          imgSrc={
                            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                          }
                        />
                        <CartProduct
                          id={2}
                          title={"TorebkaTor ebkaa typ 2"}
                          price={25}
                          imgSrc={
                            "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                          }
                        />
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Dostawa</p>
                    <p>15.00 zł</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Kurier DHL</p>
                </div>
                <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Suma</p>
                    <p>262.00 zł</p>
                  </div>
                  {/* <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p> */}
                  <div className="mt-6">
                    <Button isFullWidth variant="primary" shape="rectangle">
                      Przejdź do podsumowania
                    </Button>
                  </div>
                  <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                    <p>
                      lub{" "}
                      <button
                        type="button"
                        className="font-medium hover:underline text-primary-500"
                      >
                        kontynuuj zakupy
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
