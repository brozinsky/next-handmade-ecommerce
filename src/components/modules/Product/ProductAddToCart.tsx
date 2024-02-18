import Button from "@/components/ui/Button";
import useCartStore from "@/stores/useCartStore";
import React, { useState } from "react";
import { Product as ProductType } from "@/utils/types";

type CartItem = ProductType & {
  quantity: number;
};

export default function ProductAddToCart({ products, productId }) {
  const [counter, setCounter] = useState(1);
  const { addItem } = useCartStore();

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-end gap-4 xs:flex-row">
      <div className="flex h-10 border border-neutral-400/60 rounded-xl">
        <button
          className="w-8 border-r border-neutral-400/60"
          onClick={handleDecrement}
        >
          -
        </button>
        <div className="flex items-center justify-center w-8">{counter}</div>
        <button
          className="w-8 border-l border-neutral-400/60"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <Button
        onClick={() => {
          const productToAdd = products.find(
            (product) => product.id === productId
          );
          if (productToAdd) {
            addItem(productToAdd as CartItem, counter);
          }
        }}
        variant="primary"
        shape="rectangle"
      >
        Dodaj do koszyka
      </Button>
    </div>
  );
}
