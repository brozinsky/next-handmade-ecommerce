import CartEmpty from "@/components/layout/Cart/CartEmpty";
import CartSection from "@/components/layout/Cart/CartSection";
import PageWrapper from "@/components/utils/PageWrapper";
import useCartStore from "@/stores/useCartStore";
import { getShippingInfo } from "../../../../sanity/sanity-utils";

export default async function CartPage() {
  const shippingInfo = await getShippingInfo();

  return (
    <PageWrapper className="bg-light-ivory">
      <CartSection shippingInfo={shippingInfo}/>
    </PageWrapper>
  );
}
