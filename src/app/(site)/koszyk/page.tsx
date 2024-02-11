"use client";
import CartDrawer from "@/components/layout/Cart/CartDrawer";
import CartEmpty from "@/components/layout/Cart/CartEmpty";
import CartSection from "@/components/layout/Cart/CartSection";
import PageWrapper from "@/components/utils/PageWrapper";
import useCartStore from "@/stores/useCartStore";

export default function CartPage() {
  const { items } = useCartStore();

  return (
    <PageWrapper className="bg-light-ivory">
      <div>{items.length !== 0 ? <CartSection /> : <CartEmpty />}</div>
    </PageWrapper>
  );
}
