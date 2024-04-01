import React from "react";
import Product from "./Product";
import HeadlingLineWithLink from "@/components/ui/HeadlingLineWithLink";
import { getProducts } from "../../../../sanity/sanity-utils";
import { TProduct } from "@/utils/types";

type TProductFeatured = TProduct & {
  discountPrice?: number | null;
  isNew?: boolean;
  imageUrl?: string;
  categories?: any;
};

export default async function Featured() {
  const products = await getProducts();

  return (
    <section id="Featured" className="bg-white pt-section pb-section-half">
      <div className="container mx-auto space-y-8 container--xs">
        <div className="space-y-2 text-center">
          <HeadlingLineWithLink>Wybrane produkty</HeadlingLineWithLink>
        </div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {products &&
            products
              .sort((a: TProduct, b: TProduct) =>
                a.isAvailable === b.isAvailable ? 0 : a.isAvailable ? -1 : 1
              )
              .slice(0, 4)
              .map((product: TProductFeatured) => {
                return (
                  <Product
                    key={product._id}
                    _id={product._id}
                    imageUrl={product.imageUrl}
                    title={product.name}
                    category={product.categories[0].title.toLowerCase()}
                    price={product.price}
                    discountPrice={product.discountPrice}
                    isAvailable={product.isAvailable}
                    isNew={product.isNew}
                    isImmediate={product.isImmediate}
                  />
                );
              })}
        </div>
      </div>
    </section>
  );
}
