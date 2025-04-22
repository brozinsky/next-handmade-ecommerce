import HeadingLine from "@/components/ui/HeadingLine";
import { TProductSchema } from "@/utils/types";
import React from "react";
import Product from "@/components/layout/product/Product";

const ProductsSimilar = ({ products }: { products: TProductSchema[] }) => {
  if (products.length === 0) {
    return null;
  }
  return (
    <div className="py-section">
      <div className="container container--xs">
        <HeadingLine textPosition="center">Podobne produkty</HeadingLine>
        <div className="flex flex-row flex-wrap justify-center gap-4">
          {[...products].map(
            ({
              _id,
              imageUrl,
              name,
              categories,
              price,
              oldPrice,
              isAvailable,
              isNew,
              isImmediate,
            }) => {
              return (
                <Product
                  key={_id}
                  _id={_id}
                  imageUrl={imageUrl}
                  title={name}
                  category={categories[0].title.toLowerCase()}
                  price={price}
                  oldPrice={oldPrice}
                  isAvailable={isAvailable}
                  isNew={isNew}
                  isImmediate={isImmediate}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsSimilar;
