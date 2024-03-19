export type Product = {
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

export type Category = {
    id: number;
    value: string;
    title: string;
};


export interface ICartItem extends Product {
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
