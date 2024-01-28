import React from "react";
import CartProduct from "./CartProduct";
import Button from "@/components/ui/Button";
import EmptyCartSVG from "@/public/empty-cart.svg";
import Image from "next/image";
import Link from "next/link";

export default function CartEmpty() {
  return (
    <section className="py-section min-h-screen-footer flex-center-center">
      <div className="container container--xs">
        <div className="flex flex-col items-center justify-center h-full">
          <Image
            className="max-w-56 opacity-80"
            src={EmptyCartSVG}
            width={200}
            height={200}
            priority
            alt="Brak produktów w koszyku"
          />
          <h1
            className="mb-2 text-xl font-medium text-neutral-900"
            id="slide-over-title"
          >
            Twój koszyk jest pusty
          </h1>
          <p className="mb-4 text-neutral-500">
            Przejdź do sklepu i odkryj nasze produkty!
          </p>
          <Link href="/sklep" className="mb-8">
            <Button variant="primary" shape="rectangle">
              Przejdź
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
