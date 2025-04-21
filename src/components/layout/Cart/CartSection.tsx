"use client";
import React, { FormEvent } from "react";
import useCartStore from "@/stores/useCartStore";
import CartEmpty from "./CartEmpty";
import CartSummary from "./CartSummary";
import { TCartForm, TShippingInfo } from "@/utils/types";
import CartItems from "./CartItems";
import CartForm from "./CartForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { cartSchema } from "@/utils/cartFormData";
import Button from "@/components/ui/Button";
import { transformShippingOptions } from "@/utils/function";

export default function CartSection({
  shippingInfo,
}: {
  shippingInfo: TShippingInfo;
}) {
  const { items } = useCartStore();
  const shippingOptions = transformShippingOptions(shippingInfo);
  const [shippingPrice, setShippingPrice] = React.useState<number>(
    shippingOptions.length > 0 ? shippingOptions[0].price : 0
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [shipping, setShipping] = React.useState<string>(
    shippingOptions[0].value
  );

  React.useEffect(() => {
    const newPrice = shippingOptions.find(
      (option: any) => option.value === shipping
    )?.price;
    if (newPrice !== undefined) {
      setShippingPrice(newPrice);
    }
  }, [shipping, shippingOptions]);

  React.useEffect(() => {
    console.log("shippingInfo:", shippingInfo);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCartForm>({
    resolver: zodResolver(cartSchema),
    mode: "onBlur",
  });

  const submitFn = async (formData: TCartForm) => {
    setIsLoading(true);

    const products = [
      ...items.map((item) => ({
        name: `${item.name}${item.color ? `, kolor: ${item.color}` : ""}`,
        price: item.price,
        quantity: item.quantity,
      })),
      {
        name: "Przesyłka",
        price: shippingPrice,
        quantity: 1,
      },
    ];

    const payload = {
      products,
      ...formData,
      shipping,
      shippingPrice,
    };

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Błąd podczas tworzenia sesji Stripe");

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Brak URL w odpowiedzi z backendu");
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!items || items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <section className="py-section min-h-screen-footer">
      <div className="container container--xs ">
        <form className="flex flex-col gap-8 md:gap-20 md:flex-row ">
          <div className="md:w-8/12">
            <CartItems items={items} />
            <div className="my-8 border-t border-gray-200"></div>
            <CartForm register={register} errors={errors} />
          </div>
          <div className="max-w-96 md:w-4/12">
            <CartSummary
              shipping={shipping}
              setShipping={setShipping}
              shippingOptions={shippingOptions}
              shippingPrice={shippingPrice}
            />
            <Button
              type="button"
              isLoading={isLoading}
              isFullWidth
              variant="primary"
              shape="rectangle"
              onClick={handleSubmit(submitFn)}
            >
              Przejdź do płatności
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
