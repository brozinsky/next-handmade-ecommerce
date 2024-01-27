"use client";
import About from "@/components/layout/about/About";
import PageWrapper from "@/components/utils/PageWrapper";
import { ZoomIn } from "react-feather";
import Button from "@/components/ui/Button";
import { useState } from "react";
import clsx from "clsx";
import Separator from "@/components/utils/Separator";
import Product from "@/components/layout/product/Product";
import HeadingLine from "@/components/ui/HeadingLine";
import ProductGallery from "@/components/layout/gallery/ProductGallery";
import useCartStore from "@/stores/useCartStore";

const products = [
  {
    id: 1,
    title: "Opaska typ 1",
    category: "opaski",
    price: 15,
    discountPrice: null,
    description:
      "Ręcznie wykonana opaska z przędzy bawełnianej T-shirt yarn typu premium. <br> Szerokość opaski – 3 cm. <br> Wygodna, bez uciskowa. <br> Róźne kolory do wyboru, zdjęcia znajdują się w galerii.",
    isAvailable: true,
    isNew: false,
    isImmidiate: true,
  },
  {
    id: 2,
    title: "Opaska 2",
    category: "opaski",
    price: 15,
    discountPrice: null,
    description: "",
    isAvailable: true,
    isNew: false,
    isImmidiate: true,
  },
  {
    id: 22,
    title: "Opaska typ 3",
    category: "opaski",
    price: 18,
    discountPrice: null,
    description: "",
    isAvailable: true,
    isNew: false,
    isImmidiate: true,
  },
  {
    id: 3,
    title: "Torebka 1",
    category: "plecaki",
    price: 90,
    description: "",
    isAvailable: false,
    isNew: false,
    isImmidiate: false,
  },
  {
    id: 4,
    title: "Torebka 2",
    category: "plecaki",
    price: 80,
    discountPrice: null,
    description: "",
    isAvailable: true,
    isNew: true,
    isImmidiate: false,
  },
  {
    id: 5,
    title: "Plecak",
    category: "plecaki",
    price: 120,
    discountPrice: 18,
    description: "",
    isAvailable: true,
    isNew: false,
    isImmidiate: false,
  },
  {
    id: 6,
    title: "Koszyk z ażurowym wieczkiem",
    category: "koszyki",
    price: 60,
    discountPrice: null,
    description:
      "Ręcznie wykonany koszyk ze sznurka bawełnianego z ażurowym wieczkiem oraz mocnym spodem z drewnianej sklejki. <br> Idealny do przechowywania różnych rzeczy lub na prezent. <br> Średnica koszyka 20 cm.",
    isAvailable: true,
    isNew: false,
    isImmidiate: false,
  },
];

export default function ProductPage({ searchParams }) {
  const [counter, setCounter] = useState(1);
  const [tab, setTab] = useState(0);
  const {addItem} = useCartStore();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <PageWrapper className="bg-light-ivory">
      <div className="py-section">
        <div className="container container--xs">
          <div className="flex flex-row gap-16">
            <ProductGallery />
            <div>
              <h1 className="mb-4 text-4xl font-medium text-primary-800">
                {searchParams.title}
              </h1>

              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-base font-light leading-snug text-neutral-800">
                    Info Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Quasi, excepturi? Fugiat distinctio ut earum magni.
                  </p>
                  <p className="font-light">
                    <strong className="font-semibold">Dostępność:</strong> od ręki
                  </p>
                </div>
                <Separator />
                <div className="flex flex-row items-center justify-between gap-8">
                  <div className="text-3xl font-semibold text-primary-800">
                    {searchParams.price},00 zł
                  </div>
                  <div className="flex flex-row items-center justify-end gap-4">
                    <div className="flex flex-row h-10 border border-neutral-400/60 rounded-xl">
                      <button
                        className="w-10 border-r border-neutral-400/60"
                        onClick={handleDecrement}
                      >
                        -
                      </button>
                      <div className="flex items-center justify-center w-10">
                        {counter}
                      </div>
                      <button
                        className="w-10 border-l border-neutral-400/60"
                        onClick={handleIncrement}
                      >
                        +
                      </button>
                    </div>
                    <Button onClick={() => addItem(products[0])} variant="primary" shape="rectangle">
                      Dodaj do koszyka
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="space-y-4">
                  <div className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 ">
                    <button
                      className={clsx(
                        tab == 0
                          ? "bg-gray-100 text-neutral-900"
                          : "hover:text-gray-600 hover:bg-gray-50",
                        "inline-block p-4  rounded-t-lg "
                      )}
                      onClick={() => setTab(0)}
                    >
                      <span className={"text-lg font-medium cursor-pointer"}>
                        Opis
                      </span>
                    </button>
                    <button
                      className={clsx(
                        tab == 1
                          ? "bg-gray-100 text-neutral-900"
                          : "hover:text-gray-600 hover:bg-gray-50",
                        "inline-block p-4  rounded-t-lg "
                      )}
                      onClick={() => setTab(1)}
                    >
                      <span className={"text-lg font-medium cursor-pointer"}>
                        Wymiary
                      </span>
                    </button>
                    <button
                      className={clsx(
                        tab == 2
                          ? "bg-gray-100 text-neutral-900"
                          : "hover:text-gray-600 hover:bg-gray-50",
                        "inline-block p-4  rounded-t-lg "
                      )}
                      onClick={() => setTab(2)}
                    >
                      <span className={"text-lg font-medium cursor-pointer"}>
                        Koszty wysyłki
                      </span>
                    </button>
                  </div>
                  {tab == 0 && (
                    <p className="font-light">
                      Torba została wykonana z wysokiej jakości tkaniny
                      imitującej len.
                    </p>
                  )}
                  {tab == 1 && (
                    <div>
                      <p className="font-light">
                        <strong className="font-semibold">Wysokość:</strong> 40 cm
                      </p>
                      <p className="font-light">
                        <strong className="font-semibold">Szerokość:</strong> 40cm
                      </p>
                      <p className="font-light">
                        <strong className="font-semibold">Szerokość boku:</strong> 12 cm
                      </p>
                    </div>
                  )}
                </div>
                {tab == 2 && (
                  <div className="product-shipping-info">
                    <div className="font-light">Paczkomaty inPost: 18 zł</div>
                    <div className="font-light">Poczta Polska - priorytet: 17 zł</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-section">
        <div className="container container--xs">
          <HeadingLine textPosition="center">Podobne produkty</HeadingLine>
          <div className="flex flex-row justify-center gap-x-4">
            {[...products]
              .filter(
                (product) =>
                  product.category === searchParams.category &&
                  product.title !== searchParams.title
              )
              .sort((a, b) =>
                a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
              )
              .map((product) => {
                return (
                  <div className="max-w-[250px]">
                    <Product key={product.id} {...product} />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
