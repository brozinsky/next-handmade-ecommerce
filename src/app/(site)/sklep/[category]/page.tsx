"use client";
import Products from "@/components/layout/product/Products";
import PageWrapper from "@/components/utils/PageWrapper";
import { usePathname } from "next/navigation";

export default function ProductsCategoryPage() {
  const pathname = usePathname();
  //   const { category } = router.query;
  const parts = pathname.split("/");
  const category = parts[parts.length - 1];
  console.log("category 👻", category);
  return (
    <div className="relative flex flex-col h-full pt-16 bg-neutral-900">
      <Products category={category} />
    </div>
  );
}
