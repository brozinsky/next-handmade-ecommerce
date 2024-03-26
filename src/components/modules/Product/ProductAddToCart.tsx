"use client";
import Button from "@/components/ui/Button";
import useCartStore from "@/stores/useCartStore";
import React, { Fragment, useEffect, useState } from "react";
import { ICartItem, TProduct } from "@/utils/types";
import Select from "@/components/ui/Select/Select";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";

type TInputOption = {
  id: number;
  value: string;
  title: string;
};

type TProps = {
  products: TProduct[];
  productId: string;
  price: string;
  discountPrice?: string;
  isColorSelect: boolean;
  colors: TInputOption[];
  colorsGallery: { url: string }[];
};

export default function ProductAddToCart({
  products,
  productId,
  price,
  discountPrice,
  colors,
  colorsGallery,
  isColorSelect,
}: TProps) {
  const [counter, setCounter] = useState(1);
  const [color, setColor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const { addItem } = useCartStore();
  const [lightbox, setLightbox] = useState<PhotoSwipeLightbox | null>(null);

  let validationSchema = Yup.object().shape({});

  if (isColorSelect) {
    validationSchema = validationSchema.shape({
      color: Yup.string().required("Wybierz kolor produktu"),
    });
  }

  const formik = useFormik({
    initialValues: { color: "", quantity: 1 },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const productToAdd = products.find(
        (product) => product._id === productId
      );
      if (productToAdd) {
        if (values.color) {
          addItem(
            `${productToAdd.name} ${values.color}`,
            productToAdd as ICartItem,
            counter,
            values.color
          );
        } else {
          addItem(`${productToAdd.name}`, productToAdd as ICartItem, counter);
        }
      }
    },
  });

  useEffect(() => {
    formik.setFieldValue("quantity", counter);
  }, [counter]);

  useEffect(() => {
    formik.setFieldValue("color", color);
  }, [color]);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#color-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
    });

    lightbox.init();
    setLightbox(lightbox);

    return () => lightbox.destroy();
  }, []);

  const handleImageClick = () => {
    lightbox?.loadAndOpen(0);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleSubmitButton = () => {
    formik.handleSubmit();
    setIsSubmitting(true);
  };

  return (
    <Fragment>
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {isColorSelect && (
          // <ColorSelect
          //   colors={colors}
          //   color={color}
          //   setColor={setColor}
          // />
          <div>
            <div className="flex flex-row gap-2">
              <p className="mb-1">Kolory -</p>
              <div id="color-gallery" className="colors-gallery">
                {colorsGallery.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    data-pswp-width={1300}
                    data-pswp-height={1300}
                    style={{ display: "none" }}
                  >
                    <Image src={item.url} alt={``} width={1300} height={1300} />
                  </a>
                ))}
                <p
                  className="mb-1 cursor-pointer text-primary-600"
                  onClick={handleImageClick}
                >
                  pokaż
                </p>
              </div>
            </div>
            <Select options={colors} state={color} setState={setColor} />
            {isSubmitting && formik.errors.color && (
              <div className="text-red-500 text-md">{formik.errors.color}</div>
            )}
          </div>
        )}
        {/* <Select
          label={"Okucia"}
          options={fittings}
          state={fitting}
          setState={setFitting}
        /> */}
      </form>

      <div className="flex flex-col items-center justify-between gap-8 sm:flex-row xl:flex-row">
        <div className="flex flex-col ">
          {discountPrice && (
            <div className="line-through text-primary-800 opacity-70">
              {parseFloat(price).toFixed(2).replace(".", ",")} zł
            </div>
          )}
          <div className="text-3xl font-semibold whitespace-nowrap text-primary-800">
            {discountPrice
              ? parseFloat(discountPrice).toFixed(2).replace(".", ",")
              : parseFloat(price).toFixed(2).replace(".", ",")}{" "}
            zł
          </div>
        </div>
        <div className="flex flex-col items-center justify-end gap-4 xs:flex-row">
          <div className="flex h-10 border border-neutral-400/60 rounded-xl">
            <button
              className="w-8 border-r border-neutral-400/60"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="flex items-center justify-center w-8">
              {counter}
            </div>
            <button
              className="w-8 border-l border-neutral-400/60"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
          <Button
            onClick={() => handleSubmitButton()}
            variant="primary"
            shape="rectangle"
          >
            Dodaj do koszyka
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
