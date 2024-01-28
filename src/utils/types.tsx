export type Product = {
  id: number;
  title: string;
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