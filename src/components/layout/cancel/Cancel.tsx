import Image from "next/image";
import React from "react";
import Button from "@/components/ui/Button";
import NoProductSVG from "@/public/no-product.svg";
import Link from "next/link";

export default async function Cancel() {
  return (
    <>
      <section
        id="Cancel"
        className="flex justify-center py-section min-h-screen-footer"
      >
        <div className="container container--sm">
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              className="mb-4 max-w-56 opacity-80"
              src={NoProductSVG}
              width={200}
              height={200}
              priority
              alt="Brak produktów w koszyku"
            />
            <div className="max-w-md text-center">
              <h1 className="mt-10 mb-4 text-3xl font-medium text-center">
                Płatność anulowana
              </h1>
              <div className="mb-6 text-neutral-500">
                Nastąpił problem z płatnością Twojego zamówienia. <br /> Spróbuj
                ponownie.
              </div>
            </div>
            <Link href="/koszyk">
              <Button variant="primary" shape="rectangle">
                Powrót do koszyka
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
