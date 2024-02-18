import React from "react";
import Product from "./Product";
import HeadlingLineWithLink from "@/components/ui/HeadlingLineWithLink";
import { products } from "@/utils/products";
import useProductsQuery from "@/stores/useProductsQuery";
import ProductSkeleton from "./ProductSkeleton";
import { getProducts } from "../../../../sanity/sanity-utils";

export default async function Featured() {
  const products = await getProducts();

  return (
    <section id="Featured" className="bg-white pt-section pb-section-half">
      <div className="container mx-auto space-y-8 container--xs">
        <div className="space-y-2 text-center">
          <HeadlingLineWithLink>Wybrane produkty</HeadlingLineWithLink>
        </div>
        <div className="lg:min-h-[397px] grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
          {/* {isLoadingProducts &&
            [...Array(8)].map((_, index) => <ProductSkeleton key={index} />)} */}
          {products &&
            products
              .sort((a, b) =>
                a.isAvailable === b.isAvailable
                  ? 0
                  : a.isAvailable
                  ? -1
                  : 1
              )
              .slice(0, 4)
              .map((product) => {
                return (
                  <Product
                    // key={product.id}
                    // id={product.id}
                    // title={product.attributes.title}
                    // category={product.attributes.category}
                    // price={product.attributes.price}
                    // discountPrice={product.attributes.discountPrice}
                    // isAvailable={product.attributes.isAvailable}
                    // isNew={product.attributes.isNew}
                    // isImmediate={product.attributes.isImmediate}
                    
                    key={product._id}
                    id={product._id}
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
