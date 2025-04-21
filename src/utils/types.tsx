import { StaticImageData } from "next/image";
import { ReactNode } from "react";
import { z } from "zod";
import { cartSchema } from "./cartFormData";

export type TProduct = {
  _id: string;
  title?: string;
  name?: string;
  category: string;
  price: number;
  discountPrice?: number | null;
  description?: string;
  isAvailable?: boolean;
  isNew?: boolean;
  isImmediate?: boolean;
};

export type TBlockContent = any;
export type TSanityImage = {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export type TCategoryReference = {
  _type: "reference";
  _ref: string;
  id: number;
  value: string;
  title: string;
};

export type TCategory = {
  id: number;
  value: string;
  title: string;
};

export type TShipping = {
  name: string;
  slug: string;
  price: number;
};

export type TProductSchema = {
  _id: string;
  name: string;
  slug: {
    _type: "slug";
    current: string;
  };
  description?: TBlockContent;
  measurements?: TBlockContent;
  categories: TCategoryReference[];
  featured_image?: TSanityImage;
  price: number;
  currency: "PLN";
  discountPrice?: number;
  isOnSale: boolean;
  isImmediate: boolean;
  isAvailable: boolean;
  isNew: boolean;
  isColorSelect: boolean;
  imageGallery?: TSanityImage[];
  imageUrl?: string;
  similarProducts?: TCategoryReference[];
};

export type TTextMark = "strong" | "em";
export interface ICartItem extends TProduct {
  key: string;
  quantity: number;
  color?: string;
  imageUrl?: string;
}

export type TCartStore = {
  items: ICartItem[];
  addItem: (
    key: string,
    item: ICartItem,
    quantity: number,
    color?: string
  ) => void;
  removeItem: (itemId: string) => void;
  clearCart: () => void;
  incrementItemQuantity: (itemId: string) => void;
  decrementItemQuantity: (itemId: string) => void;
};

export type TCategoryTile = {
  imgSrc: StaticImageData;
  title: string;
  value: string;
  width?: number;
  height?: number;
};

export type TButton = {
  onClick?: any;
  children?: ReactNode;
  variant?:
    | "primary"
    | "neutral"
    | "ghost"
    | "outlined"
    | "outlined-no-hover"
    | null
    | undefined;
  icon?: string;
  className?: string;
  shape?:
    | "rectangle"
    | "circle"
    | "square"
    | "custom"
    | "custom-reversed"
    | null
    | undefined;
  size?: "md" | "sm" | null | undefined;
  isLoading?: boolean;
  label?: string;
  isFullWidth?: boolean;
  type?: "button" | "submit" | "reset";
};

export type TLoadingWrapper = {
  children?: ReactNode;
  isLoading?: boolean;
};

export type TSVG = {
  className?: string;
  width?: string | number;
  height?: string | number;
  direction?: "left" | "right" | "top" | "bottom";
  pathClass?: string;
};

export type TShippingInfo = {
  name: string;
  slug: string;
  price: number;
};

export type TInputOption = {
  id: number;
  value: string;
  title: string;
};

export type TCartForm = z.infer<typeof cartSchema>;
