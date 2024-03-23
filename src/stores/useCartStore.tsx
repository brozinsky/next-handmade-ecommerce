import { TCartStore } from "@/utils/types";
import { toast } from "react-toastify";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { StateCreator } from "zustand";

const createStore: StateCreator<
  TCartStore,
  [["zustand/persist", TCartStore]]
> = (set) => ({
  items: [],
  addItem: (key, item, quantity, color) =>
    set((state) => {
      const itemIndex = state.items.findIndex((i) => i.key === key);
      if (itemIndex !== -1) {
        const updatedItems = state.items.map((i, index) => {
          if (index === itemIndex) {
            toast.success(
              `Produkt dodany do koszyka. ${item.title} x${quantity}`,
              {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              }
            );
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
        return { items: [...state.items, { ...item, quantity, key, color }] };
      }
    }),
  removeItem: (key) =>
    set((state) => ({
      items: state.items.filter((item) => item.key !== key),
    })),
  clearCart: () => set({ items: [] }),
  incrementItemQuantity: (key) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.key === key ? { ...item, quantity: item.quantity + 1 } : item
      ),
    })),
  decrementItemQuantity: (key) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.key === key
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      ),
    })),
});

const useCartStore = create<TCartStore>(
  //@ts-ignore
  persist(createStore, { name: "cart-storage" })
);

export default useCartStore;
