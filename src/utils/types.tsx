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

export type TCategory = {
    id: number;
    value: string;
    title: string;
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
