import HeadingLine from "@/components/ui/HeadingLine";
import { TProduct } from "@/utils/types";
import React from "react";
import Product from "@/components/layout/product/Product";

const ProductsSimilar = ({ products }: { products: TProduct[] }) => {
    if (products.length === 0) {
        return null
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
              discountPrice,
              isAvailable,
              isNew,
              isImmediate,
            }) => {
              return (
                <Product
                  id={_id}
                  key={_id}
                  imageUrl={imageUrl}
                  title={name}
                  category={categories[0].title.toLowerCase()}
                  price={price}
                  discountPrice={discountPrice}
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
