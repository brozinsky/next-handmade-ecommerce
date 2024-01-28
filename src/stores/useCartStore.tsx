import { Product } from "@/utils/types";
import { toast } from "react-toastify";
import { create } from "zustand";

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (item: CartItem, quantity: number) => void; // Updated this line
  removeItem: (itemId: number) => void;
  clearCart: () => void;
  incrementItemQuantity: (itemId: number) => void;
  decrementItemQuantity: (itemId: number) => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item, quantity) =>
    set((state) => {
      const itemIndex = state.items.findIndex((i) => i.id === item.id);
      if (itemIndex !== -1) {
        const updatedItems = state.items.map((i, index) => {
          if (index === itemIndex) {
            toast.success(`Produkt dodany do koszyka. ${item.title}`, {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            return { ...i, quantity: i.quantity + quantity };
          }
          return i;
        });
        return { items: updatedItems };
      } else {
        toast.success(`Produkt dodany do koszyka. ${item.title}`, {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return { items: [...state.items, { ...item, quantity }] };
      }
    }),
  removeItem: (itemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== itemId),
    })),
  clearCart: () => set({ items: [] }),
  incrementItemQuantity: (itemId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementItemQuantity: (itemId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),
}));

export default useCartStore;
